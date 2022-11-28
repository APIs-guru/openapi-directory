from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetArchitecturesArchitectureNamePathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArchitecturesArchitectureNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetArchitecturesArchitectureNameRequest:
    path_params: GetArchitecturesArchitectureNamePathParams = field()
    security: GetArchitecturesArchitectureNameSecurity = field()
    

@dataclass
class GetArchitecturesArchitectureNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
