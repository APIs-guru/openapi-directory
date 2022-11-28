from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BuildStepStatusEnum(str, Enum):
    STATUS_UNKNOWN = "STATUS_UNKNOWN"
    PENDING = "PENDING"
    QUEUED = "QUEUED"
    WORKING = "WORKING"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    TIMEOUT = "TIMEOUT"
    CANCELLED = "CANCELLED"
    EXPIRED = "EXPIRED"


@dataclass_json
@dataclass
class BuildStepInput:
    r"""BuildStepInput
    A step in the build pipeline.
    """
    
    allow_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowExitCodes') }})
    allow_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowFailure') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dir') }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pull_timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullTiming') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    secret_env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnv') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    wait_for: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitFor') }})
    

@dataclass_json
@dataclass
class BuildStep:
    r"""BuildStep
    A step in the build pipeline.
    """
    
    allow_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowExitCodes') }})
    allow_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowFailure') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dir') }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entrypoint') }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pull_timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullTiming') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    secret_env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnv') }})
    status: Optional[BuildStepStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    timing: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timing') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    wait_for: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitFor') }})
    
