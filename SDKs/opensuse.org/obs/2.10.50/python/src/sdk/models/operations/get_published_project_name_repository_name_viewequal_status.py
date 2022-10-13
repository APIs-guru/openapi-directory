from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
class GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum(str, Enum):
    STATUS = "status"


@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams:
    view: Optional[GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusRequest:
    path_params: GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams = field(default=None)
    query_params: GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams = field(default=None)
    security: GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
