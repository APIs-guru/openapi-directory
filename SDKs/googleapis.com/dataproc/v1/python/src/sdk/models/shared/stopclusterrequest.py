from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StopClusterRequest:
    r"""StopClusterRequest
    A request to stop a cluster.
    """
    
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
