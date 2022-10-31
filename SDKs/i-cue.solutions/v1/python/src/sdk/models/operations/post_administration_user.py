from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAdministrationUserHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAdministrationUserRequests:
    new_user_request: Optional[shared.NewUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    new_user_request1: Optional[shared.NewUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    new_user_request2: Optional[shared.NewUserRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAdministrationUserRequest:
    headers: PostAdministrationUserHeaders = field(default=None)
    request: Optional[PostAdministrationUserRequests] = field(default=None)
    

@dataclass
class PostAdministrationUserResponse:
    content_type: str = field(default=None)
    post_administration_user_200_application_json_uuid_string: Optional[str] = field(default=None)
    post_administration_user_200_text_json_uuid_string: Optional[str] = field(default=None)
    post_administration_user_200_text_plain_uuid_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
