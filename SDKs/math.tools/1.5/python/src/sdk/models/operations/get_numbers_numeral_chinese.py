from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersNumeralChineseQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersNumeralChineseSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNumeralChineseRequest:
    query_params: GetNumbersNumeralChineseQueryParams = field(default=None)
    security: GetNumbersNumeralChineseSecurity = field(default=None)
    

@dataclass
class GetNumbersNumeralChineseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
