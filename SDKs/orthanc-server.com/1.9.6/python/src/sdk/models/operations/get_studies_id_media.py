from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStudiesIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDMediaQueryParams:
    extended: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extended', 'style': 'form', 'explode': True }})
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDMediaRequest:
    path_params: GetStudiesIDMediaPathParams = field()
    query_params: GetStudiesIDMediaQueryParams = field()
    

@dataclass
class GetStudiesIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
