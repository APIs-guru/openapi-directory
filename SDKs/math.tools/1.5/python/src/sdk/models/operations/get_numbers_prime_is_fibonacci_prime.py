from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsFibonacciPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeRequest:
    query_params: GetNumbersPrimeIsFibonacciPrimeQueryParams = field(default=None)
    security: GetNumbersPrimeIsFibonacciPrimeSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
