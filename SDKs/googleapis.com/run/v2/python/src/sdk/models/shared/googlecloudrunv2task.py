from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2condition
from . import googlecloudrunv2container
from . import googlecloudrunv2taskattemptresult
from . import googlecloudrunv2volume
from . import googlecloudrunv2vpcaccess

class GoogleCloudRunV2TaskExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"

class GoogleCloudRunV2TaskLaunchStageEnum(str, Enum):
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
class GoogleCloudRunV2Task:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    conditions: Optional[List[googlecloudrunv2condition.GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    containers: Optional[List[googlecloudrunv2container.GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    execution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution' }})
    execution_environment: Optional[GoogleCloudRunV2TaskExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionEnvironment' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'job' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_attempt_result: Optional[googlecloudrunv2taskattemptresult.GoogleCloudRunV2TaskAttemptResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptResult' }})
    launch_stage: Optional[GoogleCloudRunV2TaskLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRetries' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    retried: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retried' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volumes: Optional[List[googlecloudrunv2volume.GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    vpc_access: Optional[googlecloudrunv2vpcaccess.GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccess' }})
    
