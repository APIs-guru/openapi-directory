from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInstancesIDAnonymizePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAnonymizeRequest:
    path_params: PostInstancesIDAnonymizePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostInstancesIDAnonymizeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
