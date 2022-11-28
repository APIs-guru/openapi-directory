from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateUserByNameRequests:
    create_user_by_name: Optional[shared.CreateUserByName] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_user_by_name1: Optional[shared.CreateUserByName] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_user_by_name2: Optional[shared.CreateUserByName] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateUserByNameSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateUserByNameRequest:
    request: CreateUserByNameRequests = field()
    security: CreateUserByNameSecurity = field()
    

@dataclass
class CreateUserByNameResponse:
    content_type: str = field()
    status_code: int = field()
    user_dto: Optional[shared.UserDto] = field(default=None)
    
