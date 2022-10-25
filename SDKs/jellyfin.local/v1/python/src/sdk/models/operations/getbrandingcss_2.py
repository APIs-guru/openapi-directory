from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBrandingCSS2Response:
    content_type: str = field(default=None)
    get_branding_css_2_200_application_json_string: Optional[str] = field(default=None)
    get_branding_css_2_200_text_css_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
