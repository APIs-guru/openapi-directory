from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeIsFibonacciPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeRequest:
    query_params: GetNumbersPrimeIsFibonacciPrimeQueryParams = field()
    security: GetNumbersPrimeIsFibonacciPrimeSecurity = field()
    

@dataclass
class GetNumbersPrimeIsFibonacciPrimeResponse:
    content_type: str = field()
    status_code: int = field()
    
