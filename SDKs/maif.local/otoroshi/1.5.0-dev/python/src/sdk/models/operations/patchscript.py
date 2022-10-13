from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchScriptPathParams:
    script_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchScriptRequest:
    path_params: PatchScriptPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchScriptSecurity = field(default=None)
    

@dataclass
class PatchScriptResponse:
    content_type: str = field(default=None)
    script: Optional[shared.Script] = field(default=None)
    status_code: int = field(default=None)
    
