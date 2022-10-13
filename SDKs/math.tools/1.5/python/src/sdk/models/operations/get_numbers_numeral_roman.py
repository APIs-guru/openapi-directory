from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersNumeralRomanQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersNumeralRomanSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNumeralRomanRequest:
    query_params: GetNumbersNumeralRomanQueryParams = field(default=None)
    security: GetNumbersNumeralRomanSecurity = field(default=None)
    

@dataclass
class GetNumbersNumeralRomanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
