from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublishedProjectNamePathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRequest:
    path_params: GetPublishedProjectNamePathParams = field()
    security: GetPublishedProjectNameSecurity = field()
    

@dataclass
class GetPublishedProjectNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
