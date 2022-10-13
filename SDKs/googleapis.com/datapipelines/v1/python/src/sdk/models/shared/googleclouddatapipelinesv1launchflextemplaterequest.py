from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1launchflextemplateparameter


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest:
    launch_parameter: Optional[googleclouddatapipelinesv1launchflextemplateparameter.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchParameter' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
