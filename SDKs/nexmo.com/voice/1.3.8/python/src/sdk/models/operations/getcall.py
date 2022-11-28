from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCallPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCallSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCallRequest:
    path_params: GetCallPathParams = field()
    security: GetCallSecurity = field()
    

@dataclass
class GetCallResponse:
    content_type: str = field()
    status_code: int = field()
    get_call_response: Optional[shared.GetCallResponse] = field(default=None)
    
