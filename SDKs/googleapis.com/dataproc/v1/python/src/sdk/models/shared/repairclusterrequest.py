from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RepairClusterRequest:
    r"""RepairClusterRequest
    A request to repair a cluster.
    """
    
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    graceful_decommission_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracefulDecommissionTimeout') }})
    node_pools: Optional[List[NodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    parent_operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOperationId') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
