from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPiQueryParams:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPiSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPiRequest:
    query_params: GetNumbersPiQueryParams = field()
    security: GetNumbersPiSecurity = field()
    

@dataclass
class GetNumbersPiResponse:
    content_type: str = field()
    status_code: int = field()
    
