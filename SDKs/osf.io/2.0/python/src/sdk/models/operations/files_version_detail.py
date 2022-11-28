from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FilesVersionDetailPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    version_id: str = field(metadata={'path_param': { 'field_name': 'version_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesVersionDetailRequest:
    path_params: FilesVersionDetailPathParams = field()
    

@dataclass
class FilesVersionDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
