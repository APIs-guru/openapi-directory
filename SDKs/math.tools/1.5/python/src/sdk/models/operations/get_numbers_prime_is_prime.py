from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsPrimeRequest:
    query_params: GetNumbersPrimeIsPrimeQueryParams = field(default=None)
    security: GetNumbersPrimeIsPrimeSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsPrimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
