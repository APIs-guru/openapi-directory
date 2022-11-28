from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateCallRequestAnswerURLAnswerMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"

class CreateCallRequestAnswerURLEventMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"

class CreateCallRequestAnswerURLMachineDetectionEnum(str, Enum):
    CONTINUE = "continue"
    HANGUP = "hangup"


@dataclass_json
@dataclass
class CreateCallRequestAnswerURL:
    answer_url: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    to: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    answer_method: Optional[CreateCallRequestAnswerURLAnswerMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_method') }})
    event_method: Optional[CreateCallRequestAnswerURLEventMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    from_: Optional[EndpointPhoneFrom] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    length_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_timer') }})
    machine_detection: Optional[CreateCallRequestAnswerURLMachineDetectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machine_detection') }})
    random_from_number: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('random_from_number') }})
    ringing_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ringing_timer') }})
    
