from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class JobStateEnum(str, Enum):
    PROCESSING_STATE_UNSPECIFIED = "PROCESSING_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class Job:
    r"""Job
    Transcoding job resource.
    """
    
    config: Optional[JobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    failure_details: Optional[List[FailureDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetails') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_uri: Optional[OriginURI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originUri') }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUri') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    progress: Optional[Progress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    ttl_after_completion_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttlAfterCompletionDays') }})
    

@dataclass_json
@dataclass
class JobInput:
    r"""JobInput
    Transcoding job resource.
    """
    
    config: Optional[JobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_uri: Optional[OriginURI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originUri') }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUri') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    progress: Optional[Progress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    ttl_after_completion_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttlAfterCompletionDays') }})
    
