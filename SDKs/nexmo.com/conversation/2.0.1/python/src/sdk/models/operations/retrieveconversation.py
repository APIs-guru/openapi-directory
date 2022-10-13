from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RetrieveConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveConversationRequest:
    path_params: RetrieveConversationPathParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSONMembers:
    channel: Optional[shared.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    initiator: Optional[shared.Initiator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiator' }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[shared.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    timestamp: Optional[shared.TimestampResMember] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSONProperties:
    video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    

@dataclass_json
@dataclass
class RetrieveConversation200ApplicationJSON:
    links: Optional[shared.LinksConversation] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    members: Optional[List[RetrieveConversation200ApplicationJSONMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    numbers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numbers' }})
    properties: Optional[RetrieveConversation200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence_number' }})
    timestamp: Optional[shared.TimestampResConversation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass
class RetrieveConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    retrieve_conversation_200_application_json_object: Optional[RetrieveConversation200ApplicationJSON] = field(default=None)
    
