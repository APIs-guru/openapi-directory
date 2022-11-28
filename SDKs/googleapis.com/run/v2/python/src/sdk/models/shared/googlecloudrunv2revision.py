from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudRunV2Revision
    A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    conditions: Optional[List[GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    containers: Optional[List[GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution_environment: Optional[GoogleCloudRunV2RevisionExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_stage: Optional[GoogleCloudRunV2RevisionLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUri') }})
    max_instance_request_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceRequestConcurrency') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    scaling: Optional[GoogleCloudRunV2RevisionScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[List[GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    
