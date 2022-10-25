from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAdministrationTokenHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostAdministrationTokenRequests:
    new_token_request: Optional[shared.NewTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    new_token_request1: Optional[shared.NewTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    new_token_request2: Optional[shared.NewTokenRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAdministrationTokenRequest:
    headers: PostAdministrationTokenHeaders = field(default=None)
    request: Optional[PostAdministrationTokenRequests] = field(default=None)
    

@dataclass
class PostAdministrationTokenResponse:
    content_type: str = field(default=None)
    post_administration_token_200_application_json_uuid_string: Optional[str] = field(default=None)
    post_administration_token_200_text_json_uuid_string: Optional[str] = field(default=None)
    post_administration_token_200_text_plain_uuid_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
