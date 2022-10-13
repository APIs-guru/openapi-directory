from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchSnowMonkeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchSnowMonkeyRequest:
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchSnowMonkeySecurity = field(default=None)
    

@dataclass
class PatchSnowMonkeyResponse:
    content_type: str = field(default=None)
    snow_monkey_config: Optional[shared.SnowMonkeyConfig] = field(default=None)
    status_code: int = field(default=None)
    
