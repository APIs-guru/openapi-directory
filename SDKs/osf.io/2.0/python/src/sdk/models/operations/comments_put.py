from dataclasses import dataclass, field
from typing import Any


@dataclass
class CommentsPutPathParams:
    comment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsPutRequest:
    path_params: CommentsPutPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CommentsPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
