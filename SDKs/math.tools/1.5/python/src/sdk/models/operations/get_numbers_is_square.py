from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersIsSquareQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsSquareSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsSquareRequest:
    query_params: GetNumbersIsSquareQueryParams = field(default=None)
    security: GetNumbersIsSquareSecurity = field(default=None)
    

@dataclass
class GetNumbersIsSquareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
