from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taskspec


@dataclass_json
@dataclass
class TaskTemplateSpec:
    spec: Optional[taskspec.TaskSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
