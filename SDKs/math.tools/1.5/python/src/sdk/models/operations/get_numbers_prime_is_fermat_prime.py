from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsFermatPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsFermatPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsFermatPrimeRequest:
    query_params: GetNumbersPrimeIsFermatPrimeQueryParams = field(default=None)
    security: GetNumbersPrimeIsFermatPrimeSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsFermatPrimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
