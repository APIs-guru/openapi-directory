from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadPersonalCurrentAccountsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadPersonalCurrentAccountsRequest:
    headers: HeadPersonalCurrentAccountsHeaders = field()
    

@dataclass
class HeadPersonalCurrentAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    no_response: Optional[dict[str, Any]] = field(default=None)
    
