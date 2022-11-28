from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBrandingOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    branding_options: Optional[shared.BrandingOptions] = field(default=None)
    
