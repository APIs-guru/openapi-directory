from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchScriptPathParams:
    script_id: str = field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchScriptRequest:
    path_params: PatchScriptPathParams = field()
    security: PatchScriptSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchScriptResponse:
    content_type: str = field()
    status_code: int = field()
    script: Optional[shared.Script] = field(default=None)
    
