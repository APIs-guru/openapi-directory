from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tasktemplatespec


@dataclass_json
@dataclass
class ExecutionSpec:
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelism' }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskCount' }})
    template: Optional[tasktemplatespec.TaskTemplateSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    
