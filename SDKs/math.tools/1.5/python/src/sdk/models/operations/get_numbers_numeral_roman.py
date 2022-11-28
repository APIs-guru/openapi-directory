from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersNumeralRomanQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersNumeralRomanSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNumeralRomanRequest:
    query_params: GetNumbersNumeralRomanQueryParams = field()
    security: GetNumbersNumeralRomanSecurity = field()
    

@dataclass
class GetNumbersNumeralRomanResponse:
    content_type: str = field()
    status_code: int = field()
    
