from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SuggestionClusterProtoCategoryEnum(str, Enum):
    UNKNOWN_CATEGORY = "unknownCategory"
    CONTENT_LABELING = "contentLabeling"
    TOUCH_TARGET_SIZE = "touchTargetSize"
    LOW_CONTRAST = "lowContrast"
    IMPLEMENTATION = "implementation"


@dataclass_json
@dataclass
class SuggestionClusterProto:
    r"""SuggestionClusterProto
    A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.
    """
    
    category: Optional[SuggestionClusterProtoCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    suggestions: Optional[List[SuggestionProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    
