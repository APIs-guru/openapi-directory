from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateStartupUserRequests:
    startup_user_dto: Optional[shared.StartupUserDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    startup_user_dto1: Optional[shared.StartupUserDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    startup_user_dto2: Optional[shared.StartupUserDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateStartupUserSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateStartupUserRequest:
    security: UpdateStartupUserSecurity = field()
    request: Optional[UpdateStartupUserRequests] = field(default=None)
    

@dataclass
class UpdateStartupUserResponse:
    content_type: str = field()
    status_code: int = field()
    
