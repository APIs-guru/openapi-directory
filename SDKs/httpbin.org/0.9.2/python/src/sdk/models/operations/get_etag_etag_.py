from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEtagEtagPathParams:
    etag: str = field(default=None, metadata={'path_param': { 'field_name': 'etag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEtagEtagHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetEtagEtagRequest:
    path_params: GetEtagEtagPathParams = field(default=None)
    headers: GetEtagEtagHeaders = field(default=None)
    

@dataclass
class GetEtagEtagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
