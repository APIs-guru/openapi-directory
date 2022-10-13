from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1job


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskExecutionStatus:
    latest_job: Optional[googleclouddataplexv1job.GoogleCloudDataplexV1Job] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestJob' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
