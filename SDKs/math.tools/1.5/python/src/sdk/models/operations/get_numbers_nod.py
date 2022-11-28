from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetNumbersNodSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNodRequest:
    security: GetNumbersNodSecurity = field()
    

@dataclass
class GetNumbersNodResponse:
    content_type: str = field()
    status_code: int = field()
    
