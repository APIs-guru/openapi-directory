from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadBranchesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class HeadBranchesRequest:
    headers: HeadBranchesHeaders = field(default=None)
    

@dataclass
class HeadBranchesResponse:
    content_type: str = field(default=None)
    no_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
