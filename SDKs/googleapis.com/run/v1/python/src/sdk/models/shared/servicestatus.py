from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addressable
from . import googlecloudrunv1condition
from . import traffictarget


@dataclass_json
@dataclass
class ServiceStatus:
    address: Optional[addressable.Addressable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    conditions: Optional[List[googlecloudrunv1condition.GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    latest_created_revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCreatedRevisionName' }})
    latest_ready_revision_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestReadyRevisionName' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    traffic: Optional[List[traffictarget.TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
