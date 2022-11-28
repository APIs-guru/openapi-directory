from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WorkerLifecycleEventEventEnum(str, Enum):
    UNKNOWN_EVENT = "UNKNOWN_EVENT"
    OS_START = "OS_START"
    CONTAINER_START = "CONTAINER_START"
    NETWORK_UP = "NETWORK_UP"
    STAGING_FILES_DOWNLOAD_START = "STAGING_FILES_DOWNLOAD_START"
    STAGING_FILES_DOWNLOAD_FINISH = "STAGING_FILES_DOWNLOAD_FINISH"
    SDK_INSTALL_START = "SDK_INSTALL_START"
    SDK_INSTALL_FINISH = "SDK_INSTALL_FINISH"


@dataclass_json
@dataclass
class WorkerLifecycleEvent:
    r"""WorkerLifecycleEvent
    A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
    """
    
    container_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerStartTime') }})
    event: Optional[WorkerLifecycleEventEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
