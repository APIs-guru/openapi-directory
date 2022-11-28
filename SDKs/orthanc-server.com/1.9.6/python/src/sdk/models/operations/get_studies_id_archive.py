from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStudiesIDArchivePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDArchiveRequest:
    path_params: GetStudiesIDArchivePathParams = field()
    query_params: GetStudiesIDArchiveQueryParams = field()
    

@dataclass
class GetStudiesIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
