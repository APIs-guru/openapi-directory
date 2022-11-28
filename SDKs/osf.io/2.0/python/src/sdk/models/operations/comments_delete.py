from dataclasses import dataclass, field



@dataclass
class CommentsDeletePathParams:
    comment_id: str = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentsDeleteRequest:
    path_params: CommentsDeletePathParams = field()
    

@dataclass
class CommentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
