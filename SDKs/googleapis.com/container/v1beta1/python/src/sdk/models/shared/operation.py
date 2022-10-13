from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import statuscondition
from . import status
from . import statuscondition
from . import operationprogress

class OperationOperationTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CREATE_CLUSTER = "CREATE_CLUSTER"
    DELETE_CLUSTER = "DELETE_CLUSTER"
    UPGRADE_MASTER = "UPGRADE_MASTER"
    UPGRADE_NODES = "UPGRADE_NODES"
    REPAIR_CLUSTER = "REPAIR_CLUSTER"
    UPDATE_CLUSTER = "UPDATE_CLUSTER"
    CREATE_NODE_POOL = "CREATE_NODE_POOL"
    DELETE_NODE_POOL = "DELETE_NODE_POOL"
    SET_NODE_POOL_MANAGEMENT = "SET_NODE_POOL_MANAGEMENT"
    AUTO_REPAIR_NODES = "AUTO_REPAIR_NODES"
    AUTO_UPGRADE_NODES = "AUTO_UPGRADE_NODES"
    SET_LABELS = "SET_LABELS"
    SET_MASTER_AUTH = "SET_MASTER_AUTH"
    SET_NODE_POOL_SIZE = "SET_NODE_POOL_SIZE"
    SET_NETWORK_POLICY = "SET_NETWORK_POLICY"
    SET_MAINTENANCE_POLICY = "SET_MAINTENANCE_POLICY"

class OperationStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"
    ABORTING = "ABORTING"


@dataclass_json
@dataclass
class Operation:
    cluster_conditions: Optional[List[statuscondition.StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterConditions' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nodepool_conditions: Optional[List[statuscondition.StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodepoolConditions' }})
    operation_type: Optional[OperationOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationType' }})
    progress: Optional[operationprogress.OperationProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    target_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLink' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
