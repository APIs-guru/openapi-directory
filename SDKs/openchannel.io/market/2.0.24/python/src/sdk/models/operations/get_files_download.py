from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFilesDownloadQueryParams:
    file_id: str = field(metadata={'query_param': { 'field_name': 'fileId', 'style': 'form', 'explode': True }})
    valid_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'validSeconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesDownloadRequest:
    query_params: GetFilesDownloadQueryParams = field()
    

@dataclass
class GetFilesDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
