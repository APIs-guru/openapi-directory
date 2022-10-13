from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_spec_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
