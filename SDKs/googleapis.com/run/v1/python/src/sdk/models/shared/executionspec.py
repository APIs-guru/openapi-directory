from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionSpec:
    r"""ExecutionSpec
    ExecutionSpec describes how the execution will look.
    """
    
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    template: Optional[TaskTemplateSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
