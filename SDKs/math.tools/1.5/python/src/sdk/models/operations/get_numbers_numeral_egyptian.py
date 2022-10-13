from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersNumeralEgyptianQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersNumeralEgyptianSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNumeralEgyptianRequest:
    query_params: GetNumbersNumeralEgyptianQueryParams = field(default=None)
    security: GetNumbersNumeralEgyptianSecurity = field(default=None)
    

@dataclass
class GetNumbersNumeralEgyptianResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
