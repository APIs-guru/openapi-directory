from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateMemberPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateMemberRequestBody:
    r"""CreateMemberRequestBody
    Create a Member in invite state 
    """
    
    channel: shared.Channel = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    action: Optional[shared.MemberActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    knocking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knocking_id') }})
    media: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    member_id_inviting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id_inviting') }})
    

@dataclass_json
@dataclass
class CreateMember201ApplicationJSON:
    channel: Optional[shared.Channel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initiator: Optional[shared.Initiator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    state: Optional[shared.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[shared.TimestampResMember] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass
class CreateMemberRequest:
    path_params: CreateMemberPathParams = field()
    request: Optional[CreateMemberRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    create_member_201_application_json_object: Optional[CreateMember201ApplicationJSON] = field(default=None)
    
