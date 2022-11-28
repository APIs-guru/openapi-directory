from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPatientsIDMediaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDMediaQueryParams:
    extended: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extended', 'style': 'form', 'explode': True }})
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDMediaRequest:
    path_params: GetPatientsIDMediaPathParams = field()
    query_params: GetPatientsIDMediaQueryParams = field()
    

@dataclass
class GetPatientsIDMediaResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
