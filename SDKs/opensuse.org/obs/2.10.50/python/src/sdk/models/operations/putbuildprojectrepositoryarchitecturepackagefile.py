from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum(str, Enum):
    REPOSITORY = "_repository"


@dataclass
class PutBuildProjectRepositoryArchitecturePackageFilePathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    file_name: str = field(metadata={'path_param': { 'field_name': 'file_name', 'style': 'simple', 'explode': False }})
    package_name: List[PutBuildProjectRepositoryArchitecturePackageFilePackageNameEnum] = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBuildProjectRepositoryArchitecturePackageFileSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutBuildProjectRepositoryArchitecturePackageFileRequest:
    path_params: PutBuildProjectRepositoryArchitecturePackageFilePathParams = field()
    security: PutBuildProjectRepositoryArchitecturePackageFileSecurity = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'plain/text' }})
    

@dataclass
class PutBuildProjectRepositoryArchitecturePackageFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
