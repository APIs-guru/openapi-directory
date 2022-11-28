from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SuggestionProtoPriorityEnum(str, Enum):
    UNKNOWN_PRIORITY = "unknownPriority"
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"


@dataclass_json
@dataclass
class SuggestionProto:
    help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpUrl') }})
    long_message: Optional[SafeHTMLProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longMessage') }})
    priority: Optional[SuggestionProtoPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    pseudo_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pseudoResourceId') }})
    region: Optional[RegionProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    screen_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenId') }})
    secondary_priority: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryPriority') }})
    short_message: Optional[SafeHTMLProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortMessage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
