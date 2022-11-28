from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecResponse:
    content_type: str = field()
    status_code: int = field()
    get_spec_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
