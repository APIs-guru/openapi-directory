from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1launchflextemplaterequest
from . import googleclouddatapipelinesv1launchtemplaterequest


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1Workload:
    dataflow_flex_template_request: Optional[googleclouddatapipelinesv1launchflextemplaterequest.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowFlexTemplateRequest' }})
    dataflow_launch_template_request: Optional[googleclouddatapipelinesv1launchtemplaterequest.GoogleCloudDatapipelinesV1LaunchTemplateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowLaunchTemplateRequest' }})
    
