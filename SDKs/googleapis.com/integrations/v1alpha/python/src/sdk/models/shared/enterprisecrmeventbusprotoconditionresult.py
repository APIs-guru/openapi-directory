from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoConditionResult:
    r"""EnterpriseCrmEventbusProtoConditionResult
    Contains the combined condition calculation results.
    """
    
    current_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentTaskNumber') }})
    next_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextTaskNumber') }})
    result: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
