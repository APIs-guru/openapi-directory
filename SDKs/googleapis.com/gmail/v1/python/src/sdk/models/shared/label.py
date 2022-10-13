from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import labelcolor

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
    color: Optional[labelcolor.LabelColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_list_visibility: Optional[LabelLabelListVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelListVisibility' }})
    message_list_visibility: Optional[LabelMessageListVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageListVisibility' }})
    messages_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesTotal' }})
    messages_unread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesUnread' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    threads_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadsTotal' }})
    threads_unread: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadsUnread' }})
    type: Optional[LabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
