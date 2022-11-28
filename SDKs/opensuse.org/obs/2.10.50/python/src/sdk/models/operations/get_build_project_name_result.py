from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetBuildProjectNameResultPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    
class GetBuildProjectNameResultViewEnum(str, Enum):
    SUMMARY = "summary"
    STATUS = "status"
    BINARYLIST = "binarylist"


@dataclass
class GetBuildProjectNameResultQueryParams:
    arch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    lastbuild: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'lastbuild', 'style': 'form', 'explode': True }})
    locallink: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'locallink', 'style': 'form', 'explode': True }})
    multibuild: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'multibuild', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    repository: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    view: Optional[GetBuildProjectNameResultViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBuildProjectNameResultSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameResultRequest:
    path_params: GetBuildProjectNameResultPathParams = field()
    query_params: GetBuildProjectNameResultQueryParams = field()
    security: GetBuildProjectNameResultSecurity = field()
    

@dataclass
class GetBuildProjectNameResultResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
