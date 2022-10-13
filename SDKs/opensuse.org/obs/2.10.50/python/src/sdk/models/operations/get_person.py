from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPersonQueryParams:
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPersonSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonRequest:
    query_params: GetPersonQueryParams = field(default=None)
    security: GetPersonSecurity = field(default=None)
    

@dataclass
class GetPersonResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
