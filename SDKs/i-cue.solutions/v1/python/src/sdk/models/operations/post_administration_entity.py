from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAdministrationEntityHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAdministrationEntityRequests:
    new_entity_request: Optional[shared.NewEntityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    new_entity_request1: Optional[shared.NewEntityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    new_entity_request2: Optional[shared.NewEntityRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAdministrationEntityRequest:
    headers: PostAdministrationEntityHeaders = field()
    request: Optional[PostAdministrationEntityRequests] = field(default=None)
    

@dataclass
class PostAdministrationEntityResponse:
    content_type: str = field()
    status_code: int = field()
    post_administration_entity_200_application_json_uuid_string: Optional[str] = field(default=None)
    post_administration_entity_200_text_json_uuid_string: Optional[str] = field(default=None)
    post_administration_entity_200_text_plain_uuid_string: Optional[str] = field(default=None)
    
