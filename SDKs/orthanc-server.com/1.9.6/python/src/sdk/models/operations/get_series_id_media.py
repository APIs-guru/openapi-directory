from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSeriesIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDMediaQueryParams:
    extended: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extended', 'style': 'form', 'explode': True }})
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDMediaRequest:
    path_params: GetSeriesIDMediaPathParams = field()
    query_params: GetSeriesIDMediaQueryParams = field()
    

@dataclass
class GetSeriesIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
