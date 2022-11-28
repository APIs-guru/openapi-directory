from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBrandingCSSResponse:
    content_type: str = field()
    status_code: int = field()
    get_branding_css_200_application_json_string: Optional[str] = field(default=None)
    get_branding_css_200_text_css_string: Optional[str] = field(default=None)
    
