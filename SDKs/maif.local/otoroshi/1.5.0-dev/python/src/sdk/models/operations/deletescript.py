from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteScriptPathParams:
    script_id: str = field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScriptSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteScriptRequest:
    path_params: DeleteScriptPathParams = field()
    security: DeleteScriptSecurity = field()
    

@dataclass
class DeleteScriptResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
