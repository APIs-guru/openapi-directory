from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadCommercialCreditCardsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class HeadCommercialCreditCardsRequest:
    headers: HeadCommercialCreditCardsHeaders = field(default=None)
    

@dataclass
class HeadCommercialCreditCardsResponse:
    content_type: str = field(default=None)
    no_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
