from dataclasses import dataclass, field
from typing import Any


@dataclass
class CommentsPutPathParams:
    comment_id: str = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsPutRequest:
    path_params: CommentsPutPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CommentsPutResponse:
    content_type: str = field()
    status_code: int = field()
    
