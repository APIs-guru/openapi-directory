from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeIsMersennePrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsMersennePrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsMersennePrimeRequest:
    query_params: GetNumbersPrimeIsMersennePrimeQueryParams = field(default=None)
    security: GetNumbersPrimeIsMersennePrimeSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeIsMersennePrimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
