from dataclasses import dataclass, field



@dataclass
class CommentsReadPathParams:
    comment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsReadRequest:
    path_params: CommentsReadPathParams = field(default=None)
    

@dataclass
class CommentsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
