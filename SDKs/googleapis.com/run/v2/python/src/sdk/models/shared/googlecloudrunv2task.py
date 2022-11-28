from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRunV2TaskExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclass
class GoogleCloudRunV2Task:
    r"""GoogleCloudRunV2Task
    Task represents a single run of a container to completion.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    conditions: Optional[List[GoogleCloudRunV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    containers: Optional[List[GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    execution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    execution_environment: Optional[GoogleCloudRunV2TaskExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_attempt_result: Optional[GoogleCloudRunV2TaskAttemptResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptResult') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    observed_generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    reconciling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciling') }})
    retried: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retried') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[List[GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    
