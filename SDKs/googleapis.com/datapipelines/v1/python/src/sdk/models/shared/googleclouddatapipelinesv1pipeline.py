from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1schedulespec
from . import googleclouddatapipelinesv1workload

class GoogleCloudDatapipelinesV1PipelineStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STATE_RESUMING = "STATE_RESUMING"
    STATE_ACTIVE = "STATE_ACTIVE"
    STATE_STOPPING = "STATE_STOPPING"
    STATE_ARCHIVED = "STATE_ARCHIVED"
    STATE_PAUSED = "STATE_PAUSED"

class GoogleCloudDatapipelinesV1PipelineTypeEnum(str, Enum):
    PIPELINE_TYPE_UNSPECIFIED = "PIPELINE_TYPE_UNSPECIFIED"
    PIPELINE_TYPE_BATCH = "PIPELINE_TYPE_BATCH"
    PIPELINE_TYPE_STREAMING = "PIPELINE_TYPE_STREAMING"


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1Pipeline:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    job_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobCount' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pipeline_sources: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineSources' }})
    schedule_info: Optional[googleclouddatapipelinesv1schedulespec.GoogleCloudDatapipelinesV1ScheduleSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleInfo' }})
    scheduler_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulerServiceAccountEmail' }})
    state: Optional[GoogleCloudDatapipelinesV1PipelineStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[GoogleCloudDatapipelinesV1PipelineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    workload: Optional[googleclouddatapipelinesv1workload.GoogleCloudDatapipelinesV1Workload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workload' }})
    
