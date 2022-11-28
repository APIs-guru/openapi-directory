from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFilesByIDOrURLQueryParams:
    file_id_or_url: str = field(metadata={'query_param': { 'field_name': 'fileIdOrUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesByIDOrURLRequest:
    query_params: GetFilesByIDOrURLQueryParams = field()
    

@dataclass
class GetFilesByIDOrURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
