from dataclasses import dataclass, field
from typing import Any


@dataclass
class FilesPatchPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesPatchRequest:
    path_params: FilesPatchPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FilesPatchResponse:
    content_type: str = field()
    status_code: int = field()
    
