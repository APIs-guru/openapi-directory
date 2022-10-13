from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBrandingCSSResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_branding_css_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
