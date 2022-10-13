from dataclasses import dataclass, field



@dataclass
class FilesVersionDetailPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'version_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesVersionDetailRequest:
    path_params: FilesVersionDetailPathParams = field(default=None)
    

@dataclass
class FilesVersionDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
