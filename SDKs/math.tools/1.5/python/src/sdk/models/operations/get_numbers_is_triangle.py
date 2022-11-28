from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersIsTriangleQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsTriangleSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsTriangleRequest:
    query_params: GetNumbersIsTriangleQueryParams = field()
    security: GetNumbersIsTriangleSecurity = field()
    

@dataclass
class GetNumbersIsTriangleResponse:
    content_type: str = field()
    status_code: int = field()
    
