from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TargetingExpansionConfigTargetingExpansionLevelEnum(str, Enum):
    TARGETING_EXPANSION_LEVEL_UNSPECIFIED = "TARGETING_EXPANSION_LEVEL_UNSPECIFIED"
    NO_EXPANSION = "NO_EXPANSION"
    LEAST_EXPANSION = "LEAST_EXPANSION"
    SOME_EXPANSION = "SOME_EXPANSION"
    BALANCED_EXPANSION = "BALANCED_EXPANSION"
    MORE_EXPANSION = "MORE_EXPANSION"
    MOST_EXPANSION = "MOST_EXPANSION"


@dataclass_json
@dataclass
class TargetingExpansionConfig:
    exclude_first_party_audience: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeFirstPartyAudience' }})
    targeting_expansion_level: Optional[TargetingExpansionConfigTargetingExpansionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingExpansionLevel' }})
    
