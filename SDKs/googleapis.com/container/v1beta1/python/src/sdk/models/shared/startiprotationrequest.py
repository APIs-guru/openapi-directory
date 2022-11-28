from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartIPRotationRequest:
    r"""StartIPRotationRequest
    StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    rotate_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotateCredentials') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
