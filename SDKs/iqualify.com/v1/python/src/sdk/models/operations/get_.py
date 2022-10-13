from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetResponse:
    content_type: str = field(default=None)
    get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
