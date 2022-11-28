from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeIsPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsPrimeRequest:
    query_params: GetNumbersPrimeIsPrimeQueryParams = field()
    security: GetNumbersPrimeIsPrimeSecurity = field()
    

@dataclass
class GetNumbersPrimeIsPrimeResponse:
    content_type: str = field()
    status_code: int = field()
    
