from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReplaceConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceConversationRequestBody:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[shared.ConversationProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class ReplaceConversation200ApplicationJSON:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass
class ReplaceConversationRequest:
    path_params: ReplaceConversationPathParams = field()
    request: Optional[ReplaceConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplaceConversationResponse:
    content_type: str = field()
    status_code: int = field()
    replace_conversation_200_application_json_object: Optional[ReplaceConversation200ApplicationJSON] = field(default=None)
    
