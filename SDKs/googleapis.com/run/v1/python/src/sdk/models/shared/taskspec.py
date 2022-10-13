from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container
from . import volume


@dataclass_json
@dataclass
class TaskSpec:
    containers: Optional[List[container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    service_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountName' }})
    timeout_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
