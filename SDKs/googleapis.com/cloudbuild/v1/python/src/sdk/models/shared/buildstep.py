from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timespan
from . import timespan
from . import volume

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
class BuildStep:
    allow_exit_codes: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowExitCodes' }})
    allow_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowFailure' }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dir' }})
    entrypoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entrypoint' }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pull_timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullTiming' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    secret_env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretEnv' }})
    status: Optional[BuildStepStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    wait_for: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitFor' }})
    
