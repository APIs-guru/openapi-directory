from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPatientsIDArchivePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDArchiveRequest:
    path_params: GetPatientsIDArchivePathParams = field(default=None)
    query_params: GetPatientsIDArchiveQueryParams = field(default=None)
    

@dataclass
class GetPatientsIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
