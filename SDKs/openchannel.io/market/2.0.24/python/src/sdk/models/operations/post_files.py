from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostFilesQueryParams:
    hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hash', 'style': 'form', 'explode': True }})
    is_private: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    

@dataclass
class PostFilesRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostFilesRequestBody:
    file: PostFilesRequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostFilesRequest:
    query_params: PostFilesQueryParams = field(default=None)
    request: PostFilesRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostFilesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
