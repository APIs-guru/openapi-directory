from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnumPropertyOptionsOrderedRankingEnum(str, Enum):
    NO_ORDER = "NO_ORDER"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class EnumPropertyOptions:
    r"""EnumPropertyOptions
    The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
    """
    
    operator_options: Optional[EnumOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorOptions') }})
    ordered_ranking: Optional[EnumPropertyOptionsOrderedRankingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedRanking') }})
    possible_values: Optional[List[EnumValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('possibleValues') }})
    
