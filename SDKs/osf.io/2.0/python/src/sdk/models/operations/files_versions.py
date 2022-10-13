from dataclasses import dataclass, field



@dataclass
class FilesVersionsPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesVersionsRequest:
    path_params: FilesVersionsPathParams = field(default=None)
    

@dataclass
class FilesVersionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
