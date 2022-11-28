from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCountryListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    country_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    
