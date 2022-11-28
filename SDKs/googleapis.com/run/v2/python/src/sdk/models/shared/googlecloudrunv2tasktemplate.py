from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum(str, Enum):
    EXECUTION_ENVIRONMENT_UNSPECIFIED = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
    EXECUTION_ENVIRONMENT_GEN1 = "EXECUTION_ENVIRONMENT_GEN1"
    EXECUTION_ENVIRONMENT_GEN2 = "EXECUTION_ENVIRONMENT_GEN2"


@dataclass_json
@dataclass
class GoogleCloudRunV2TaskTemplate:
    r"""GoogleCloudRunV2TaskTemplate
    TaskTemplate describes the data a task should have when created from a template.
    """
    
    containers: Optional[List[GoogleCloudRunV2Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    execution_environment: Optional[GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionEnvironment') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    volumes: Optional[List[GoogleCloudRunV2Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    vpc_access: Optional[GoogleCloudRunV2VpcAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccess') }})
    
