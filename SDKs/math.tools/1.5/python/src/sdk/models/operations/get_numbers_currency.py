from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersCurrencyQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersCurrencySecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersCurrencyRequest:
    query_params: GetNumbersCurrencyQueryParams = field()
    security: GetNumbersCurrencySecurity = field()
    

@dataclass
class GetNumbersCurrencyResponse:
    content_type: str = field()
    status_code: int = field()
    
