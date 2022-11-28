from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInstancesIDAnonymizePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDAnonymizeRequest:
    path_params: PostInstancesIDAnonymizePathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostInstancesIDAnonymizeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
