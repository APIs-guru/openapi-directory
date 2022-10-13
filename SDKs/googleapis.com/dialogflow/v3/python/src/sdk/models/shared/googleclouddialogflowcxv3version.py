from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3nlusettings

class GoogleCloudDialogflowCxV3VersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Version:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nlu_settings: Optional[googleclouddialogflowcxv3nlusettings.GoogleCloudDialogflowCxV3NluSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluSettings' }})
    state: Optional[GoogleCloudDialogflowCxV3VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
