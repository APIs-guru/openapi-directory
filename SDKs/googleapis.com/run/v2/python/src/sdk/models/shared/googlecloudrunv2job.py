from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2binaryauthorization
from . import googlecloudrunv2condition
from . import googlecloudrunv2executionreference
from . import googlecloudrunv2executiontemplate
from . import googlecloudrunv2condition

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
class GoogleCloudRunV2Job:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    binary_authorization: Optional[googlecloudrunv2binaryauthorization.GoogleCloudRunV2BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryAuthorization' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientVersion' }})
    conditions: Optional[List[googlecloudrunv2condition.GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    execution_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionCount' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_modifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifier' }})
    latest_created_execution: Optional[googlecloudrunv2executionreference.GoogleCloudRunV2ExecutionReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCreatedExecution' }})
    launch_stage: Optional[GoogleCloudRunV2JobLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    template: Optional[googlecloudrunv2executiontemplate.GoogleCloudRunV2ExecutionTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    terminal_condition: Optional[googlecloudrunv2condition.GoogleCloudRunV2Condition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminalCondition' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
