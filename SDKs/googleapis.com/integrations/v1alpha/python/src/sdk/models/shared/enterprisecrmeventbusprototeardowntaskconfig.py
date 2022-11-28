from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTeardownTaskConfig:
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_teardown_task: Optional[EnterpriseCrmEventbusProtoNextTeardownTask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTeardownTask') }})
    parameters: Optional[EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    properties: Optional[EnterpriseCrmEventbusProtoEventBusProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    teardown_task_implementation_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardownTaskImplementationClassName') }})
    
