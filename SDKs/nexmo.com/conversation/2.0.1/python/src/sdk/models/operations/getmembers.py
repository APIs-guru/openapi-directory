from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetMembersPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetMembers200ApplicationJSON:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: shared.MemberStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    

@dataclass
class GetMembersRequest:
    path_params: GetMembersPathParams = field()
    

@dataclass
class GetMembersResponse:
    content_type: str = field()
    status_code: int = field()
    get_members_200_application_json_objects: Optional[List[GetMembers200ApplicationJSON]] = field(default=None)
    
