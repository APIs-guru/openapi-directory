from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeFactorsQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeFactorsSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeFactorsRequest:
    query_params: GetNumbersPrimeFactorsQueryParams = field()
    security: GetNumbersPrimeFactorsSecurity = field()
    

@dataclass
class GetNumbersPrimeFactorsResponse:
    content_type: str = field()
    status_code: int = field()
    
