from dataclasses import dataclass, field



@dataclass
class RegistrationsFilesReadPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsFilesReadRequest:
    path_params: RegistrationsFilesReadPathParams = field(default=None)
    

@dataclass
class RegistrationsFilesReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
