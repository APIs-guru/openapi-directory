from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSeriesIDArchivePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDArchiveRequest:
    path_params: GetSeriesIDArchivePathParams = field(default=None)
    query_params: GetSeriesIDArchiveQueryParams = field(default=None)
    

@dataclass
class GetSeriesIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
