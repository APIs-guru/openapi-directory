from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nodepool


@dataclass_json
@dataclass
class RepairClusterRequest:
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterUuid' }})
    graceful_decommission_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gracefulDecommissionTimeout' }})
    node_pools: Optional[List[nodepool.NodePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePools' }})
    parent_operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentOperationId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
