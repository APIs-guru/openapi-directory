from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1job


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1RunPipelineResponse:
    job: Optional[googleclouddatapipelinesv1job.GoogleCloudDatapipelinesV1Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    
