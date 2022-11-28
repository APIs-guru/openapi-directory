from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetNumbersFactQueryParams:
    number: int = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersFactSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersFactRequest:
    query_params: GetNumbersFactQueryParams = field()
    security: GetNumbersFactSecurity = field()
    

@dataclass
class GetNumbersFactResponse:
    content_type: str = field()
    status_code: int = field()
    
