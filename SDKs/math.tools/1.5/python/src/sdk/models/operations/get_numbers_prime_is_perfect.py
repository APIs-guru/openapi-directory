from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsPerfectQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsPerfectSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsPerfectRequest:
    query_params: GetNumbersPrimeIsPerfectQueryParams = field(default=None)
    security: GetNumbersPrimeIsPerfectSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsPerfectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
