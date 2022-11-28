from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeIsFermatPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsFermatPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsFermatPrimeRequest:
    query_params: GetNumbersPrimeIsFermatPrimeQueryParams = field()
    security: GetNumbersPrimeIsFermatPrimeSecurity = field()
    

@dataclass
class GetNumbersPrimeIsFermatPrimeResponse:
    content_type: str = field()
    status_code: int = field()
    
