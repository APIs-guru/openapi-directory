from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadUnsecuredSmeLoansHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadUnsecuredSmeLoansRequest:
    headers: HeadUnsecuredSmeLoansHeaders = field(default=None)
    

@dataclass
class HeadUnsecuredSmeLoansResponse:
    content_type: str = field(default=None)
    no_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
