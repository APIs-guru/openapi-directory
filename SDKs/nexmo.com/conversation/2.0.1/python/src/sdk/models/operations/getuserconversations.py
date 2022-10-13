from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetuserConversationsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetuserConversationsRequest:
    path_params: GetuserConversationsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetuserConversations200ApplicationJSONTimestamp:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    

@dataclass_json
@dataclass
class GetuserConversations200ApplicationJSON:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence_number' }})
    state: Optional[shared.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    timestamp: Optional[GetuserConversations200ApplicationJSONTimestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass
class GetuserConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    getuser_conversations_200_application_json_objects: Optional[List[GetuserConversations200ApplicationJSON]] = field(default=None)
    
