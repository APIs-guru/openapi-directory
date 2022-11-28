from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3VersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VersionInput:
    r"""GoogleCloudDialogflowCxV3VersionInput
    Represents a version of a flow.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Version:
    r"""GoogleCloudDialogflowCxV3Version
    Represents a version of a flow.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    state: Optional[GoogleCloudDialogflowCxV3VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
