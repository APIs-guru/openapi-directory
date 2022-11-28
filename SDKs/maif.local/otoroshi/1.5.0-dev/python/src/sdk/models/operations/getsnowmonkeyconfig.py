from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSnowMonkeyConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnowMonkeyConfigRequest:
    security: GetSnowMonkeyConfigSecurity = field()
    

@dataclass
class GetSnowMonkeyConfigResponse:
    content_type: str = field()
    status_code: int = field()
    snow_monkey_config: Optional[shared.SnowMonkeyConfig] = field(default=None)
    
