from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IntegerPropertyOptionsOrderedRankingEnum(str, Enum):
    NO_ORDER = "NO_ORDER"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class IntegerPropertyOptions:
    r"""IntegerPropertyOptions
    The options for integer properties.
    """
    
    maximum_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumValue') }})
    minimum_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumValue') }})
    operator_options: Optional[IntegerOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorOptions') }})
    ordered_ranking: Optional[IntegerPropertyOptionsOrderedRankingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedRanking') }})
    
