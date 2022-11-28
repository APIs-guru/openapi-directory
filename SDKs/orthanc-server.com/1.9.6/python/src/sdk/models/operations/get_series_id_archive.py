from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSeriesIDArchivePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDArchiveRequest:
    path_params: GetSeriesIDArchivePathParams = field()
    query_params: GetSeriesIDArchiveQueryParams = field()
    

@dataclass
class GetSeriesIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
