from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInstancesIDExportPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDExportRequest:
    path_params: PostInstancesIDExportPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostInstancesIDExportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
