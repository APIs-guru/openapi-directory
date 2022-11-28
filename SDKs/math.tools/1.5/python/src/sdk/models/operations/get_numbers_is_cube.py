from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersIsCubeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsCubeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsCubeRequest:
    query_params: GetNumbersIsCubeQueryParams = field()
    security: GetNumbersIsCubeSecurity = field()
    

@dataclass
class GetNumbersIsCubeResponse:
    content_type: str = field()
    status_code: int = field()
    
