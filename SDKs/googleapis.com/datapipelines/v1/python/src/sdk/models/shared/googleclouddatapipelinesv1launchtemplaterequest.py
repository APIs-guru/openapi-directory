from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1launchtemplateparameters


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1LaunchTemplateRequest:
    gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsPath' }})
    launch_parameters: Optional[googleclouddatapipelinesv1launchtemplateparameters.GoogleCloudDatapipelinesV1LaunchTemplateParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchParameters' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
