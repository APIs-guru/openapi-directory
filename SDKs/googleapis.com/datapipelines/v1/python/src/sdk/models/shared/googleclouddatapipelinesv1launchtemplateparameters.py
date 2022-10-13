from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1runtimeenvironment


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1LaunchTemplateParameters:
    environment: Optional[googleclouddatapipelinesv1runtimeenvironment.GoogleCloudDatapipelinesV1RuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformNameMapping' }})
    update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
