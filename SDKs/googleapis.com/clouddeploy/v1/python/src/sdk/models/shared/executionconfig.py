from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecutionConfigUsagesEnum(str, Enum):
    EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED = "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
    RENDER = "RENDER"
    DEPLOY = "DEPLOY"
    VERIFY = "VERIFY"


@dataclass_json
@dataclass
class ExecutionConfig:
    r"""ExecutionConfig
    Configuration of the environment to use when calling Skaffold.
    """
    
    artifact_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStorage') }})
    default_pool: Optional[DefaultPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPool') }})
    execution_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimeout') }})
    private_pool: Optional[PrivatePool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePool') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    usages: Optional[List[ExecutionConfigUsagesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usages') }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    
