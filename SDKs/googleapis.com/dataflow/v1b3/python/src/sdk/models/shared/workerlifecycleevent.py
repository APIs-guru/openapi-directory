from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    container_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerStartTime' }})
    event: Optional[WorkerLifecycleEventEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
