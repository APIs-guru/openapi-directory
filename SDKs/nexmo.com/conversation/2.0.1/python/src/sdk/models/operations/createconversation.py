from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateConversationRequestBody:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[shared.ConversationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class CreateConversationRequest:
    request: Optional[CreateConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateConversation200ApplicationJSON:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass
class CreateConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_conversation_200_application_json_object: Optional[CreateConversation200ApplicationJSON] = field(default=None)
    
