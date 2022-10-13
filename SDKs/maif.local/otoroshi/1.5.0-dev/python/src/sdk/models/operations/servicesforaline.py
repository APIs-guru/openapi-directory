from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicesForALinePathParams:
    line: str = field(default=None, metadata={'path_param': { 'field_name': 'line', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicesForALineSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServicesForALineRequest:
    path_params: ServicesForALinePathParams = field(default=None)
    security: ServicesForALineSecurity = field(default=None)
    

@dataclass
class ServicesForALineResponse:
    content_type: str = field(default=None)
    services: Optional[List[shared.Service]] = field(default=None)
    status_code: int = field(default=None)
    
