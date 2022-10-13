from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceConversationRequestBody:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[shared.ConversationProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class ReplaceConversationRequest:
    path_params: ReplaceConversationPathParams = field(default=None)
    request: Optional[ReplaceConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ReplaceConversation200ApplicationJSON:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass
class ReplaceConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    replace_conversation_200_application_json_object: Optional[ReplaceConversation200ApplicationJSON] = field(default=None)
    
