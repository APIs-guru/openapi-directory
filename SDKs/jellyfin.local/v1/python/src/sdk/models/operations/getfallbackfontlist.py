from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFallbackFontListSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFallbackFontListRequest:
    security: GetFallbackFontListSecurity = field()
    

@dataclass
class GetFallbackFontListResponse:
    content_type: str = field()
    status_code: int = field()
    font_files: Optional[List[shared.FontFile]] = field(default=None)
    
