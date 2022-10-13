from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import safehtmlproto
from . import regionproto
from . import safehtmlproto

class SuggestionProtoPriorityEnum(str, Enum):
    UNKNOWN_PRIORITY = "unknownPriority"
    ERROR = "error"
    WARNING = "warning"
    INFO = "info"


@dataclass_json
@dataclass
class SuggestionProto:
    help_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpUrl' }})
    long_message: Optional[safehtmlproto.SafeHTMLProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longMessage' }})
    priority: Optional[SuggestionProtoPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    pseudo_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pseudoResourceId' }})
    region: Optional[regionproto.RegionProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    screen_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenId' }})
    secondary_priority: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryPriority' }})
    short_message: Optional[safehtmlproto.SafeHTMLProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortMessage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
