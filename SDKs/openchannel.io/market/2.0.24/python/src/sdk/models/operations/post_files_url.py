from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostFilesURLQueryParams:
    is_private: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class PostFilesURLRequest:
    query_params: PostFilesURLQueryParams = field(default=None)
    

@dataclass
class PostFilesURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
