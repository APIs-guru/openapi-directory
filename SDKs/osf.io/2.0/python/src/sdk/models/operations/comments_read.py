from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CommentsReadPathParams:
    comment_id: str = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsReadRequest:
    path_params: CommentsReadPathParams = field()
    

@dataclass
class CommentsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
