from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateConversationRequestBody:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[shared.ConversationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class CreateConversation200ApplicationJSON:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass
class CreateConversationRequest:
    request: Optional[CreateConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConversationResponse:
    content_type: str = field()
    status_code: int = field()
    create_conversation_200_application_json_object: Optional[CreateConversation200ApplicationJSON] = field(default=None)
    
