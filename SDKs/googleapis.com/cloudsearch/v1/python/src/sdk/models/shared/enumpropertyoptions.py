from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import enumoperatoroptions
from . import enumvaluepair

class EnumPropertyOptionsOrderedRankingEnum(str, Enum):
    NO_ORDER = "NO_ORDER"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class EnumPropertyOptions:
    operator_options: Optional[enumoperatoroptions.EnumOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorOptions' }})
    ordered_ranking: Optional[EnumPropertyOptionsOrderedRankingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderedRanking' }})
    possible_values: Optional[List[enumvaluepair.EnumValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'possibleValues' }})
    
