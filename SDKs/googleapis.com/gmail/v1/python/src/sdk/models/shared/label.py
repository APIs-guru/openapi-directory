from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LabelLabelListVisibilityEnum(str, Enum):
    LABEL_SHOW = "labelShow"
    LABEL_SHOW_IF_UNREAD = "labelShowIfUnread"
    LABEL_HIDE = "labelHide"

class LabelMessageListVisibilityEnum(str, Enum):
    SHOW = "show"
    HIDE = "hide"

class LabelTypeEnum(str, Enum):
    SYSTEM = "system"
    USER = "user"


@dataclass_json
@dataclass
class Label:
    r"""Label
    Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
    """
    
    color: Optional[LabelColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label_list_visibility: Optional[LabelLabelListVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelListVisibility') }})
    message_list_visibility: Optional[LabelMessageListVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageListVisibility') }})
    messages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messagesTotal') }})
    messages_unread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messagesUnread') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    threads_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsTotal') }})
    threads_unread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsUnread') }})
    type: Optional[LabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
