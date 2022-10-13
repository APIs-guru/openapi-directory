from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1JobServiceEnum(str, Enum):
    SERVICE_UNSPECIFIED = "SERVICE_UNSPECIFIED"
    DATAPROC = "DATAPROC"

class GoogleCloudDataplexV1JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    CANCELLING = "CANCELLING"
    CANCELLED = "CANCELLED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    ABORTED = "ABORTED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Job:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    retry_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryCount' }})
    service: Optional[GoogleCloudDataplexV1JobServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceJob' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[GoogleCloudDataplexV1JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
