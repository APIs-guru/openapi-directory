from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetMembersPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMembersRequest:
    path_params: GetMembersPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetMembers200ApplicationJSON:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: shared.MemberStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_name' }})
    

@dataclass
class GetMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_members_200_application_json_objects: Optional[List[GetMembers200ApplicationJSON]] = field(default=None)
    
