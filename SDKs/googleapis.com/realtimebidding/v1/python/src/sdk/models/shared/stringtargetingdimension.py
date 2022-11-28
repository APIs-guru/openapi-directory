from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StringTargetingDimensionTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class StringTargetingDimension:
    r"""StringTargetingDimension
    Generic targeting with string values used in app, website and publisher targeting.
    """
    
    targeting_mode: Optional[StringTargetingDimensionTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingMode') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
