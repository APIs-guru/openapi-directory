from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCacheHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetCacheRequest:
    headers: GetCacheHeaders = field(default=None)
    

@dataclass
class GetCacheResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
