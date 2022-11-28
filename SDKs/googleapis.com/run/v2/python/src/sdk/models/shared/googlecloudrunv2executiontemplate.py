from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2ExecutionTemplate:
    r"""GoogleCloudRunV2ExecutionTemplate
    ExecutionTemplate describes the data an execution should have when created from a template.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    template: Optional[GoogleCloudRunV2TaskTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
