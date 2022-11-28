from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeIsMersennePrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsMersennePrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsMersennePrimeRequest:
    query_params: GetNumbersPrimeIsMersennePrimeQueryParams = field()
    security: GetNumbersPrimeIsMersennePrimeSecurity = field()
    

@dataclass
class GetNumbersPrimeIsMersennePrimeResponse:
    content_type: str = field()
    status_code: int = field()
    
