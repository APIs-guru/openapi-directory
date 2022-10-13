from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSnowMonkeyConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnowMonkeyConfigRequest:
    security: GetSnowMonkeyConfigSecurity = field(default=None)
    

@dataclass
class GetSnowMonkeyConfigResponse:
    content_type: str = field(default=None)
    snow_monkey_config: Optional[shared.SnowMonkeyConfig] = field(default=None)
    status_code: int = field(default=None)
    
