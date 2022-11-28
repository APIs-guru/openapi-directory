from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGlobalConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutGlobalConfigRequest:
    security: PutGlobalConfigSecurity = field()
    request: Optional[shared.GlobalConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGlobalConfigResponse:
    content_type: str = field()
    status_code: int = field()
    global_config: Optional[shared.GlobalConfig] = field(default=None)
    
