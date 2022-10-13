from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import runtimeenvironment


@dataclass_json
@dataclass
class CreateJobFromTemplateRequest:
    environment: Optional[runtimeenvironment.RuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsPath' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
