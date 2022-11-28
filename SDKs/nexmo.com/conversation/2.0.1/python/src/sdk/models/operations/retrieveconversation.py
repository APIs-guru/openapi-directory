from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RetrieveConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSONMembers:
    channel: Optional[shared.Channel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    initiator: Optional[shared.Initiator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[shared.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[shared.TimestampResMember] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSONProperties:
    video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSON:
    r"""RetrieveConversation200ApplicationJSON
    Conversation Object
    """
    
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    links: Optional[shared.LinksConversation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    members: Optional[List[RetrieveConversation200ApplicationJSONMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    numbers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    properties: Optional[RetrieveConversation200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    timestamp: Optional[shared.TimestampResConversation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass
class RetrieveConversationRequest:
    path_params: RetrieveConversationPathParams = field()
    

@dataclass
class RetrieveConversationResponse:
    content_type: str = field()
    status_code: int = field()
    retrieve_conversation_200_application_json_object: Optional[RetrieveConversation200ApplicationJSON] = field(default=None)
    
