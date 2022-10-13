from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFallbackFontListSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFallbackFontListRequest:
    security: GetFallbackFontListSecurity = field(default=None)
    

@dataclass
class GetFallbackFontListResponse:
    content_type: str = field(default=None)
    font_files: Optional[List[shared.FontFile]] = field(default=None)
    status_code: int = field(default=None)
    
