from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LiveStreamStatusStreamStatusEnum(str, Enum):
    CREATED = "created"
    READY = "ready"
    ACTIVE = "active"
    INACTIVE = "inactive"
    ERROR = "error"


@dataclass_json
@dataclass
class LiveStreamStatus:
    r"""LiveStreamStatus
    Brief description of the live stream status.
    """
    
    health_status: Optional[LiveStreamHealthStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthStatus') }})
    stream_status: Optional[LiveStreamStatusStreamStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamStatus') }})
    
