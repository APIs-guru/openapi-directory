from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInstancesIDModifyPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInstancesIDModifyRequest:
    path_params: PostInstancesIDModifyPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostInstancesIDModifyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
