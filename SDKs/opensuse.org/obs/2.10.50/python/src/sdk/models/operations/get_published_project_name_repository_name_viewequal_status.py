from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
class GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum(str, Enum):
    STATUS = "status"


@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams:
    view: Optional[GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusRequest:
    path_params: GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams = field()
    query_params: GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams = field()
    security: GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity = field()
    

@dataclass
class GetPublishedProjectNameRepositoryNameViewEqualStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
