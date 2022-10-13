from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGlobalConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutGlobalConfigRequest:
    request: Optional[shared.GlobalConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutGlobalConfigSecurity = field(default=None)
    

@dataclass
class PutGlobalConfigResponse:
    content_type: str = field(default=None)
    global_config: Optional[shared.GlobalConfig] = field(default=None)
    status_code: int = field(default=None)
    
