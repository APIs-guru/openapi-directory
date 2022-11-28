from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchGlobalConfigSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchGlobalConfigRequest:
    security: PatchGlobalConfigSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchGlobalConfigResponse:
    content_type: str = field()
    status_code: int = field()
    global_config: Optional[shared.GlobalConfig] = field(default=None)
    
