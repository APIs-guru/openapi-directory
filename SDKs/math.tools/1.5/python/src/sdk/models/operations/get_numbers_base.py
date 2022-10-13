from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersBaseQueryParams:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    to: int = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersBaseSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersBaseRequest:
    query_params: GetNumbersBaseQueryParams = field(default=None)
    security: GetNumbersBaseSecurity = field(default=None)
    

@dataclass
class GetNumbersBaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
