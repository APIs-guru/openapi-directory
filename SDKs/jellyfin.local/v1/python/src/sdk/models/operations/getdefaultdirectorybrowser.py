from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultDirectoryBrowserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultDirectoryBrowserRequest:
    security: GetDefaultDirectoryBrowserSecurity = field(default=None)
    

@dataclass
class GetDefaultDirectoryBrowserResponse:
    content_type: str = field(default=None)
    default_directory_browser_info_dto: Optional[shared.DefaultDirectoryBrowserInfoDto] = field(default=None)
    status_code: int = field(default=None)
    
