from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFilesDownloadQueryParams:
    file_id: str = field(default=None, metadata={'query_param': { 'field_name': 'fileId', 'style': 'form', 'explode': True }})
    valid_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'validSeconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesDownloadRequest:
    query_params: GetFilesDownloadQueryParams = field(default=None)
    

@dataclass
class GetFilesDownloadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
