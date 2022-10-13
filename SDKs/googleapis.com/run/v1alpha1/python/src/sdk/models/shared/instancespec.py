from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container
from . import volume


@dataclass_json
@dataclass
class InstanceSpec:
    active_deadline_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDeadlineSeconds' }})
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    restart_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restartPolicy' }})
    service_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountName' }})
    termination_grace_period_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminationGracePeriodSeconds' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
