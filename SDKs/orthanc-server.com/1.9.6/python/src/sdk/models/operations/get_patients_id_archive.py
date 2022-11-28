from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPatientsIDArchivePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDArchiveQueryParams:
    transcode: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPatientsIDArchiveRequest:
    path_params: GetPatientsIDArchivePathParams = field()
    query_params: GetPatientsIDArchiveQueryParams = field()
    

@dataclass
class GetPatientsIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
