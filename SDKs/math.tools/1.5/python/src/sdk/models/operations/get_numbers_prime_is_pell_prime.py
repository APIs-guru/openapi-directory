from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsPellPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsPellPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsPellPrimeRequest:
    query_params: GetNumbersPrimeIsPellPrimeQueryParams = field(default=None)
    security: GetNumbersPrimeIsPellPrimeSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsPellPrimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
