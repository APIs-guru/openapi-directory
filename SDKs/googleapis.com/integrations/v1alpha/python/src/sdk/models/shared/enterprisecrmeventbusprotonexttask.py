from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNextTask:
    r"""EnterpriseCrmEventbusProtoNextTask
    The task that is next in line to be executed, if the condition specified evaluated to true.
    """
    
    combined_conditions: Optional[List[EnterpriseCrmEventbusProtoCombinedCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedConditions') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    task_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskConfigId') }})
    task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskNumber') }})
    
