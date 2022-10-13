from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchGlobalConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchGlobalConfigRequest:
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchGlobalConfigSecurity = field(default=None)
    

@dataclass
class PatchGlobalConfigResponse:
    content_type: str = field(default=None)
    global_config: Optional[shared.GlobalConfig] = field(default=None)
    status_code: int = field(default=None)
    
