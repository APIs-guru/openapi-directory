from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchSnowMonkeyRequest:
    security: PatchSnowMonkeySecurity = field()
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchSnowMonkeyResponse:
    content_type: str = field()
    status_code: int = field()
    snow_monkey_config: Optional[shared.SnowMonkeyConfig] = field(default=None)
    
