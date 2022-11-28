from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersBaseOctalQueryParams:
    number: int = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersBaseOctalSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersBaseOctalRequest:
    query_params: GetNumbersBaseOctalQueryParams = field()
    security: GetNumbersBaseOctalSecurity = field()
    

@dataclass
class GetNumbersBaseOctalResponse:
    content_type: str = field()
    status_code: int = field()
    
