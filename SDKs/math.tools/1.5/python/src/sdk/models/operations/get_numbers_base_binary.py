from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersBaseBinaryQueryParams:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersBaseBinarySecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersBaseBinaryRequest:
    query_params: GetNumbersBaseBinaryQueryParams = field(default=None)
    security: GetNumbersBaseBinarySecurity = field(default=None)
    

@dataclass
class GetNumbersBaseBinaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
