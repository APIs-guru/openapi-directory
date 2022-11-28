from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HeadCommercialCreditCardsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class HeadCommercialCreditCardsRequest:
    headers: HeadCommercialCreditCardsHeaders = field()
    

@dataclass
class HeadCommercialCreditCardsResponse:
    content_type: str = field()
    status_code: int = field()
    no_response: Optional[dict[str, Any]] = field(default=None)
    
