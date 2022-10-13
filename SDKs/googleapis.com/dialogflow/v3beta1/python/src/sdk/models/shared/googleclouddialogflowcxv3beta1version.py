from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1nlusettings

class GoogleCloudDialogflowCxV3beta1VersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Version:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nlu_settings: Optional[googleclouddialogflowcxv3beta1nlusettings.GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluSettings' }})
    state: Optional[GoogleCloudDialogflowCxV3beta1VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
