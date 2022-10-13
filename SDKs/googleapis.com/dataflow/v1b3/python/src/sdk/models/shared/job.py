from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import environment
from . import jobexecutioninfo
from . import jobmetadata
from . import pipelinedescription
from . import executionstagestate
from . import step

class JobCurrentStateEnum(str, Enum):
    JOB_STATE_UNKNOWN = "JOB_STATE_UNKNOWN"
    JOB_STATE_STOPPED = "JOB_STATE_STOPPED"
    JOB_STATE_RUNNING = "JOB_STATE_RUNNING"
    JOB_STATE_DONE = "JOB_STATE_DONE"
    JOB_STATE_FAILED = "JOB_STATE_FAILED"
    JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"
    JOB_STATE_UPDATED = "JOB_STATE_UPDATED"
    JOB_STATE_DRAINING = "JOB_STATE_DRAINING"
    JOB_STATE_DRAINED = "JOB_STATE_DRAINED"
    JOB_STATE_PENDING = "JOB_STATE_PENDING"
    JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"
    JOB_STATE_QUEUED = "JOB_STATE_QUEUED"
    JOB_STATE_RESOURCE_CLEANING_UP = "JOB_STATE_RESOURCE_CLEANING_UP"

class JobRequestedStateEnum(str, Enum):
    JOB_STATE_UNKNOWN = "JOB_STATE_UNKNOWN"
    JOB_STATE_STOPPED = "JOB_STATE_STOPPED"
    JOB_STATE_RUNNING = "JOB_STATE_RUNNING"
    JOB_STATE_DONE = "JOB_STATE_DONE"
    JOB_STATE_FAILED = "JOB_STATE_FAILED"
    JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED"
    JOB_STATE_UPDATED = "JOB_STATE_UPDATED"
    JOB_STATE_DRAINING = "JOB_STATE_DRAINING"
    JOB_STATE_DRAINED = "JOB_STATE_DRAINED"
    JOB_STATE_PENDING = "JOB_STATE_PENDING"
    JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING"
    JOB_STATE_QUEUED = "JOB_STATE_QUEUED"
    JOB_STATE_RESOURCE_CLEANING_UP = "JOB_STATE_RESOURCE_CLEANING_UP"

class JobTypeEnum(str, Enum):
    JOB_TYPE_UNKNOWN = "JOB_TYPE_UNKNOWN"
    JOB_TYPE_BATCH = "JOB_TYPE_BATCH"
    JOB_TYPE_STREAMING = "JOB_TYPE_STREAMING"


@dataclass_json
@dataclass
class Job:
    client_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    created_from_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdFromSnapshotId' }})
    current_state: Optional[JobCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentState' }})
    current_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStateTime' }})
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    execution_info: Optional[jobexecutioninfo.JobExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionInfo' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_metadata: Optional[jobmetadata.JobMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobMetadata' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pipeline_description: Optional[pipelinedescription.PipelineDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineDescription' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    replace_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceJobId' }})
    replaced_by_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacedByJobId' }})
    requested_state: Optional[JobRequestedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedState' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    stage_states: Optional[List[executionstagestate.ExecutionStageState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageStates' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    steps: Optional[List[step.Step]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    steps_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepsLocation' }})
    temp_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempFiles' }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformNameMapping' }})
    type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
