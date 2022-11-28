from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRunV2ExecutionLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class GoogleCloudRunV2Execution:
    r"""GoogleCloudRunV2Execution
    Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    conditions: Optional[List[GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedCount') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[GoogleCloudRunV2ExecutionLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningCount') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    succeeded_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededCount') }})
    task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    template: Optional[GoogleCloudRunV2TaskTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
