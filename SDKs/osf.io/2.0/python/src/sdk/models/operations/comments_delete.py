from dataclasses import dataclass, field



@dataclass
class CommentsDeletePathParams:
    comment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsDeleteRequest:
    path_params: CommentsDeletePathParams = field(default=None)
    

@dataclass
class CommentsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
