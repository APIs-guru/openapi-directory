from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersCurrencyQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersCurrencySecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersCurrencyRequest:
    query_params: GetNumbersCurrencyQueryParams = field(default=None)
    security: GetNumbersCurrencySecurity = field(default=None)
    

@dataclass
class GetNumbersCurrencyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
