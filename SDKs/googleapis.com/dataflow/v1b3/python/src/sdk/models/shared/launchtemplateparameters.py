from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import runtimeenvironment


@dataclass_json
@dataclass
class LaunchTemplateParameters:
    environment: Optional[runtimeenvironment.RuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformNameMapping' }})
    update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
