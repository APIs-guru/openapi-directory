from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStudiesIDArchivePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDArchiveRequest:
    path_params: GetStudiesIDArchivePathParams = field(default=None)
    query_params: GetStudiesIDArchiveQueryParams = field(default=None)
    

@dataclass
class GetStudiesIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
