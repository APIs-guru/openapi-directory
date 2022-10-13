from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cluster

class ClusterResponseStatusEnum(str, Enum):
    WAITING_IN_QUEUE = "waiting_in_queue"
    PROCESSING = "processing"
    FINISHED = "finished"


@dataclass_json
@dataclass
class ClusterResponse:
    clusters: Optional[List[cluster.Cluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrights' }})
    processing_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_time' }})
    status: Optional[ClusterResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    waiting_time_in_queue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waiting_time_in_queue' }})
    
