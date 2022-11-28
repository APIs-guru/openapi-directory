from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCacheHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCacheRequest:
    headers: GetCacheHeaders = field()
    

@dataclass
class GetCacheResponse:
    content_type: str = field()
    status_code: int = field()
    
