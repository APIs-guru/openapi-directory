from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import envvarsource


@dataclass_json
@dataclass
class EnvVar:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_from: Optional[envvarsource.EnvVarSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFrom' }})
    
