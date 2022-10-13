from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    binary_filename: str = field(default=None, metadata={'path_param': { 'field_name': 'binary_filename', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest:
    path_params: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams = field(default=None)
    security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_published_project_name_repository_name_architecture_name_binary_filename_200_application_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_published_project_name_repository_name_architecture_name_binary_filename_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
