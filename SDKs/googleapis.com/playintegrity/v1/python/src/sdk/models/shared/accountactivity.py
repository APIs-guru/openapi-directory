from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountActivityActivityLevelEnum(str, Enum):
    ACTIVITY_LEVEL_UNSPECIFIED = "ACTIVITY_LEVEL_UNSPECIFIED"
    UNEVALUATED = "UNEVALUATED"
    UNUSUAL = "UNUSUAL"
    UNKNOWN = "UNKNOWN"
    TYPICAL_BASIC = "TYPICAL_BASIC"
    TYPICAL_STRONG = "TYPICAL_STRONG"


@dataclass_json
@dataclass
class AccountActivity:
    activity_level: Optional[AccountActivityActivityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityLevel' }})
    
