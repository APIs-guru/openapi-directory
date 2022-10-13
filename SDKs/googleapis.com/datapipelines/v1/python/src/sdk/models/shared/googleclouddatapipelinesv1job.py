from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1dataflowjobdetails
from . import googlerpcstatus

class GoogleCloudDatapipelinesV1JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STATE_PENDING = "STATE_PENDING"
    STATE_RUNNING = "STATE_RUNNING"
    STATE_DONE = "STATE_DONE"
    STATE_FAILED = "STATE_FAILED"
    STATE_CANCELLED = "STATE_CANCELLED"


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1Job:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    dataflow_job_details: Optional[googleclouddatapipelinesv1dataflowjobdetails.GoogleCloudDatapipelinesV1DataflowJobDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowJobDetails' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudDatapipelinesV1JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
