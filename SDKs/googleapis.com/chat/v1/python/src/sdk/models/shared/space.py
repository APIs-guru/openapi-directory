from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SpaceSpaceThreadingStateEnum(str, Enum):
    SPACE_THREADING_STATE_UNSPECIFIED = "SPACE_THREADING_STATE_UNSPECIFIED"
    THREADED_MESSAGES = "THREADED_MESSAGES"
    GROUPED_MESSAGES = "GROUPED_MESSAGES"
    UNTHREADED_MESSAGES = "UNTHREADED_MESSAGES"

class SpaceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ROOM = "ROOM"
    DM = "DM"


@dataclass_json
@dataclass
class Space:
    r"""Space
    A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    single_user_bot_dm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUserBotDm') }})
    space_details: Optional[SpaceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceDetails') }})
    space_threading_state: Optional[SpaceSpaceThreadingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceThreadingState') }})
    threaded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threaded') }})
    type: Optional[SpaceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class SpaceInput:
    r"""SpaceInput
    A space in Google Chat. Spaces are conversations between two or more users or 1:1 messages between a user and a Chat app.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    single_user_bot_dm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUserBotDm') }})
    space_details: Optional[SpaceDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceDetails') }})
    
