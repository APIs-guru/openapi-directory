from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CounterStructuredNameOriginEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class CounterStructuredNamePortionEnum(str, Enum):
    ALL = "ALL"
    KEY = "KEY"
    VALUE = "VALUE"


@dataclass_json
@dataclass
class CounterStructuredName:
    r"""CounterStructuredName
    Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
    """
    
    component_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentStepName') }})
    execution_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStepName') }})
    input_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputIndex') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[CounterStructuredNameOriginEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    origin_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originNamespace') }})
    original_requesting_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalRequestingStepName') }})
    original_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalStepName') }})
    portion: Optional[CounterStructuredNamePortionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portion') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerId') }})
    
