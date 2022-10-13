from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCallPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCallRequest:
    path_params: GetCallPathParams = field(default=None)
    security: GetCallSecurity = field(default=None)
    

@dataclass
class GetCallResponse:
    content_type: str = field(default=None)
    get_call_response: Optional[shared.GetCallResponse] = field(default=None)
    status_code: int = field(default=None)
    
