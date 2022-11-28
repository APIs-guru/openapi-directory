from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultDirectoryBrowserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultDirectoryBrowserRequest:
    security: GetDefaultDirectoryBrowserSecurity = field()
    

@dataclass
class GetDefaultDirectoryBrowserResponse:
    content_type: str = field()
    status_code: int = field()
    default_directory_browser_info_dto: Optional[shared.DefaultDirectoryBrowserInfoDto] = field(default=None)
    
