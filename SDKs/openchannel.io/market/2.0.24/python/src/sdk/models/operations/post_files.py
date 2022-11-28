from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostFilesQueryParams:
    hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hash', 'style': 'form', 'explode': True }})
    is_private: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    

@dataclass
class PostFilesRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostFilesRequestBody:
    file: PostFilesRequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostFilesRequest:
    query_params: PostFilesQueryParams = field()
    request: PostFilesRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostFilesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
