from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFirstUser2Security:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFirstUser2Request:
    security: GetFirstUser2Security = field()
    

@dataclass
class GetFirstUser2Response:
    content_type: str = field()
    status_code: int = field()
    startup_user_dto: Optional[shared.StartupUserDto] = field(default=None)
    
