from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import suggestionproto

class SuggestionClusterProtoCategoryEnum(str, Enum):
    UNKNOWN_CATEGORY = "unknownCategory"
    CONTENT_LABELING = "contentLabeling"
    TOUCH_TARGET_SIZE = "touchTargetSize"
    LOW_CONTRAST = "lowContrast"
    IMPLEMENTATION = "implementation"


@dataclass_json
@dataclass
class SuggestionClusterProto:
    category: Optional[SuggestionClusterProtoCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    suggestions: Optional[List[suggestionproto.SuggestionProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestions' }})
    
