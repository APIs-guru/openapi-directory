from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPrimeFactorsQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeFactorsSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeFactorsRequest:
    query_params: GetNumbersPrimeFactorsQueryParams = field(default=None)
    security: GetNumbersPrimeFactorsSecurity = field(default=None)
    

@dataclass
class GetNumbersPrimeFactorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
