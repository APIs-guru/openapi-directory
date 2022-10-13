from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organizations_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
