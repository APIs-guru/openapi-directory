from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1VersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Version:
    r"""GoogleCloudDialogflowCxV3beta1Version
    Represents a version of a flow.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    state: Optional[GoogleCloudDialogflowCxV3beta1VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1VersionInput:
    r"""GoogleCloudDialogflowCxV3beta1VersionInput
    Represents a version of a flow.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nlu_settings: Optional[GoogleCloudDialogflowCxV3beta1NluSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluSettings') }})
    
