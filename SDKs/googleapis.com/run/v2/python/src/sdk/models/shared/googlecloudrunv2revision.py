from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2condition
from . import googlecloudrunv2container
from . import googlecloudrunv2revisionscaling
from . import googlecloudrunv2volume
from . import googlecloudrunv2vpcaccess

class GoogleCloudRunV2RevisionExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"

class GoogleCloudRunV2RevisionLaunchStageEnum(str, Enum):
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
class GoogleCloudRunV2Revision:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    conditions: Optional[List[googlecloudrunv2condition.GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    containers: Optional[List[googlecloudrunv2container.GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    execution_environment: Optional[GoogleCloudRunV2RevisionExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionEnvironment' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_stage: Optional[GoogleCloudRunV2RevisionLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUri' }})
    max_instance_request_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstanceRequestConcurrency' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciling' }})
    scaling: Optional[googlecloudrunv2revisionscaling.GoogleCloudRunV2RevisionScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaling' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    volumes: Optional[List[googlecloudrunv2volume.GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    vpc_access: Optional[googlecloudrunv2vpcaccess.GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcAccess' }})
    
