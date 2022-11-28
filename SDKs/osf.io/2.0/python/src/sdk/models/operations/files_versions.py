from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FilesVersionsPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesVersionsRequest:
    path_params: FilesVersionsPathParams = field()
    

@dataclass
class FilesVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
