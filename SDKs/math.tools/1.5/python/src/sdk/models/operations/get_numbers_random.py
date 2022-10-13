from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersRandomQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    total: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'total', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersRandomSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersRandomRequest:
    query_params: GetNumbersRandomQueryParams = field(default=None)
    security: GetNumbersRandomSecurity = field(default=None)
    

@dataclass
class GetNumbersRandomResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
