from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_status_200_application_json_any: Optional[Any] = field(default=None)
    
