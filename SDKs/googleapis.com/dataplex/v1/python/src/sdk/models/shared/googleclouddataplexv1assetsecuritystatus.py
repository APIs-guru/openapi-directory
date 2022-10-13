from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1AssetSecurityStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    APPLYING = "APPLYING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetSecurityStatus:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    state: Optional[GoogleCloudDataplexV1AssetSecurityStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
