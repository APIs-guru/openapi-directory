from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetSeriesIDMediaPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDMediaQueryParams:
    extended: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extended', 'style': 'form', 'explode': True }})
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDMediaRequest:
    path_params: GetSeriesIDMediaPathParams = field(default=None)
    query_params: GetSeriesIDMediaQueryParams = field(default=None)
    

@dataclass
class GetSeriesIDMediaResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
