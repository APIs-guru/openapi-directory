from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclass
class CreateApplicationRequestBody:
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateApplicationRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    answer_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_method') }})
    answer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    inbound_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_method') }})
    inbound_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_url') }})
    status_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_method') }})
    status_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_url') }})
    

@dataclass
class CreateApplicationRequest:
    request: Optional[CreateApplicationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application_created: Optional[shared.ApplicationCreated] = field(default=None)
    
