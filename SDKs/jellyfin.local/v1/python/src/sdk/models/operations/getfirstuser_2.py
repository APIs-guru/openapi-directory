from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFirstUser2Security:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFirstUser2Request:
    security: GetFirstUser2Security = field(default=None)
    

@dataclass
class GetFirstUser2Response:
    content_type: str = field(default=None)
    startup_user_dto: Optional[shared.StartupUserDto] = field(default=None)
    status_code: int = field(default=None)
    
