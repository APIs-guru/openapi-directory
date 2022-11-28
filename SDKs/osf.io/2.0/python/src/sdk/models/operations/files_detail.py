from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FilesDetailPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesDetailRequest:
    path_params: FilesDetailPathParams = field()
    

@dataclass
class FilesDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
