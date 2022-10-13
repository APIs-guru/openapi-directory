from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1CompaniesEmailTemplatesResponse:
    content_type: str = field(default=None)
    email_template_list_view_model: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
