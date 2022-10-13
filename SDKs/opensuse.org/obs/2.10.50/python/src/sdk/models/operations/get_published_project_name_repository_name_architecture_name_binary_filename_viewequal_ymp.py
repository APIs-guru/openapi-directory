from dataclasses import dataclass, field



@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    binary_filename: str = field(default=None, metadata={'path_param': { 'field_name': 'binary_filename', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest:
    path_params: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams = field(default=None)
    security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
