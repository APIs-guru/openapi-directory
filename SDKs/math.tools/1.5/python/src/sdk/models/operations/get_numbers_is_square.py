from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersIsSquareQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsSquareSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsSquareRequest:
    query_params: GetNumbersIsSquareQueryParams = field()
    security: GetNumbersIsSquareSecurity = field()
    

@dataclass
class GetNumbersIsSquareResponse:
    content_type: str = field()
    status_code: int = field()
    
