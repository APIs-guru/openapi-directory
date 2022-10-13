from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersOrdinalQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersOrdinalSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersOrdinalRequest:
    query_params: GetNumbersOrdinalQueryParams = field(default=None)
    security: GetNumbersOrdinalSecurity = field(default=None)
    

@dataclass
class GetNumbersOrdinalResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
