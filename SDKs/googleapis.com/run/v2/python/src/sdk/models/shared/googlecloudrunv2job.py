from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRunV2JobLaunchStageEnum(str, Enum):
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
class GoogleCloudRunV2JobInput:
    r"""GoogleCloudRunV2JobInput
    Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[GoogleCloudRunV2BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    latest_created_execution: Optional[GoogleCloudRunV2ExecutionReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    launch_stage: Optional[GoogleCloudRunV2JobLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template: Optional[GoogleCloudRunV2ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[GoogleCloudRunV2Condition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    

@dataclass_json
@dataclass
class GoogleCloudRunV2Job:
    r"""GoogleCloudRunV2Job
    Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    binary_authorization: Optional[GoogleCloudRunV2BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    conditions: Optional[List[GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionCount') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_modifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifier') }})
    latest_created_execution: Optional[GoogleCloudRunV2ExecutionReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    launch_stage: Optional[GoogleCloudRunV2JobLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    template: Optional[GoogleCloudRunV2ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    terminal_condition: Optional[GoogleCloudRunV2Condition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminalCondition') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
