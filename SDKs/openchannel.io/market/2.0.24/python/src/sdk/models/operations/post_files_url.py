from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostFilesURLQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    is_private: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    

@dataclass
class PostFilesURLRequest:
    query_params: PostFilesURLQueryParams = field()
    

@dataclass
class PostFilesURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
