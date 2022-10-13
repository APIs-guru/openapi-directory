from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobconfig


@dataclass_json
@dataclass
class JobTemplate:
    config: Optional[jobconfig.JobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
