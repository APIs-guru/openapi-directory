from dataclasses import dataclass, field



@dataclass
class FilesDetailPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesDetailRequest:
    path_params: FilesDetailPathParams = field(default=None)
    

@dataclass
class FilesDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
