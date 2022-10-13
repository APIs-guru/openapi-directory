from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateScriptPathParams:
    script_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateScriptRequest:
    path_params: UpdateScriptPathParams = field(default=None)
    request: Optional[shared.Script] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScriptSecurity = field(default=None)
    

@dataclass
class UpdateScriptResponse:
    content_type: str = field(default=None)
    script: Optional[shared.Script] = field(default=None)
    status_code: int = field(default=None)
    
