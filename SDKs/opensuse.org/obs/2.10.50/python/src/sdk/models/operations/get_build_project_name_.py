from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBuildProjectNamePathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRequest:
    path_params: GetBuildProjectNamePathParams = field()
    security: GetBuildProjectNameSecurity = field()
    

@dataclass
class GetBuildProjectNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
