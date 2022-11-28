from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudConnectorsV1ConnectionStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1ConnectionStatus:
    r"""GoogleCloudConnectorsV1ConnectionStatus
    ConnectionStatus indicates the state of the connection.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    state: Optional[GoogleCloudConnectorsV1ConnectionStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
