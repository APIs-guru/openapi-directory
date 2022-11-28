from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskTemplateSpec:
    r"""TaskTemplateSpec
    TaskTemplateSpec describes the data a task should have when created from a template.
    """
    
    spec: Optional[TaskSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
