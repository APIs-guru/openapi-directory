from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetCountryListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    country_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
