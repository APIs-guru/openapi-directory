from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadBusinessCurrentAccountsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class HeadBusinessCurrentAccountsRequest:
    headers: HeadBusinessCurrentAccountsHeaders = field(default=None)
    

@dataclass
class HeadBusinessCurrentAccountsResponse:
    content_type: str = field(default=None)
    no_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
