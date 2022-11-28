from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetuserConversationsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetuserConversations200ApplicationJSONTimestamp:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    

@dataclass_json
@dataclass
class GetuserConversations200ApplicationJSON:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    state: Optional[shared.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[GetuserConversations200ApplicationJSONTimestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass
class GetuserConversationsRequest:
    path_params: GetuserConversationsPathParams = field()
    

@dataclass
class GetuserConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    getuser_conversations_200_application_json_objects: Optional[List[GetuserConversations200ApplicationJSON]] = field(default=None)
    
