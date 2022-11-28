from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteRequestIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRequestIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRequestIDRequest:
    path_params: DeleteRequestIDPathParams = field()
    security: DeleteRequestIDSecurity = field()
    

@dataclass
class DeleteRequestIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
