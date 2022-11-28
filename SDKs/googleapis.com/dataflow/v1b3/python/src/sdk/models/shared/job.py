from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Job
    Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
    """
    
    client_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    created_from_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdFromSnapshotId') }})
    current_state: Optional[JobCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentState') }})
    current_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStateTime') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_info: Optional[JobExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    job_metadata: Optional[JobMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobMetadata') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pipeline_description: Optional[PipelineDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineDescription') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    replace_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceJobId') }})
    replaced_by_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacedByJobId') }})
    requested_state: Optional[JobRequestedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedState') }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    stage_states: Optional[List[ExecutionStageState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageStates') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    steps: Optional[List[Step]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    steps_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepsLocation') }})
    temp_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempFiles') }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformNameMapping') }})
    type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class JobInput:
    r"""JobInput
    Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
    """
    
    client_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    created_from_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdFromSnapshotId') }})
    current_state: Optional[JobCurrentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentState') }})
    current_state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStateTime') }})
    environment: Optional[EnvironmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_info: Optional[JobExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfo') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    job_metadata: Optional[JobMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobMetadata') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pipeline_description: Optional[PipelineDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineDescription') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    replace_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceJobId') }})
    replaced_by_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacedByJobId') }})
    requested_state: Optional[JobRequestedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedState') }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    stage_states: Optional[List[ExecutionStageState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageStates') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    steps: Optional[List[Step]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    steps_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepsLocation') }})
    temp_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempFiles') }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformNameMapping') }})
    type: Optional[JobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
