from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import integeroperatoroptions

class IntegerPropertyOptionsOrderedRankingEnum(str, Enum):
    NO_ORDER = "NO_ORDER"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class IntegerPropertyOptions:
    maximum_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumValue' }})
    minimum_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumValue' }})
    operator_options: Optional[integeroperatoroptions.IntegerOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    ordered_ranking: Optional[IntegerPropertyOptionsOrderedRankingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderedRanking' }})
    
