from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""TargetingExpansionConfig
    Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning November 7, 2022, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by November 9, 2022.
    """
    
    exclude_first_party_audience: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeFirstPartyAudience') }})
    targeting_expansion_level: Optional[TargetingExpansionConfigTargetingExpansionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingExpansionLevel') }})
    
