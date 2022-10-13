from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteScriptPathParams:
    script_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteScriptRequest:
    path_params: DeleteScriptPathParams = field(default=None)
    security: DeleteScriptSecurity = field(default=None)
    

@dataclass
class DeleteScriptResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
