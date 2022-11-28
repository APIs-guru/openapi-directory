from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPersonQueryParams:
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPersonSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonRequest:
    query_params: GetPersonQueryParams = field()
    security: GetPersonSecurity = field()
    

@dataclass
class GetPersonResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
