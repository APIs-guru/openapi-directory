from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNamePathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameRequest:
    path_params: GetPublishedProjectNameRepositoryNameArchitectureNamePathParams = field()
    security: GetPublishedProjectNameRepositoryNameArchitectureNameSecurity = field()
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
