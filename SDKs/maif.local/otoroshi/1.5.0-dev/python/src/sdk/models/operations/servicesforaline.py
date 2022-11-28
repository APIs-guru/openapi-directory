from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicesForALinePathParams:
    line: str = field(metadata={'path_param': { 'field_name': 'line', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicesForALineSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServicesForALineRequest:
    path_params: ServicesForALinePathParams = field()
    security: ServicesForALineSecurity = field()
    

@dataclass
class ServicesForALineResponse:
    content_type: str = field()
    status_code: int = field()
    services: Optional[List[shared.Service]] = field(default=None)
    
