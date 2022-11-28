from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    binary_filename: str = field(metadata={'path_param': { 'field_name': 'binary_filename', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest:
    path_params: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams = field()
    security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity = field()
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_published_project_name_repository_name_architecture_name_binary_filename_200_application_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_published_project_name_repository_name_architecture_name_binary_filename_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
