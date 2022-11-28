from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventTopic:
    action: Optional[EventTopicActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    arguments: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_id') }})
    resource_type: Optional[EventTopicResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_url') }})
    

@dataclass_json
@dataclass
class Event:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    payload: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_created') }})
    time_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_event') }})
    time_expire: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_expire') }})
    topic: Optional[EventTopic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
