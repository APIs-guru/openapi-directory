from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersPiQueryParams:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPiSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPiRequest:
    query_params: GetNumbersPiQueryParams = field(default=None)
    security: GetNumbersPiSecurity = field(default=None)
    

@dataclass
class GetNumbersPiResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
