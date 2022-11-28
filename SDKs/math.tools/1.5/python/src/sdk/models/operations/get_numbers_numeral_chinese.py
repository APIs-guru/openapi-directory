from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersNumeralChineseQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersNumeralChineseSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNumeralChineseRequest:
    query_params: GetNumbersNumeralChineseQueryParams = field()
    security: GetNumbersNumeralChineseSecurity = field()
    

@dataclass
class GetNumbersNumeralChineseResponse:
    content_type: str = field()
    status_code: int = field()
    
