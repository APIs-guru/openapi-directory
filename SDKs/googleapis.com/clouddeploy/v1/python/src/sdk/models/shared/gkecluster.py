from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeCluster:
    r"""GkeCluster
    Information specifying a GKE Cluster.
    """
    
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    internal_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    
