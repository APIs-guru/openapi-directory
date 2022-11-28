from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompositeFilterLogicOperatorEnum(str, Enum):
    AND = "AND"
    OR = "OR"
    NOT = "NOT"


@dataclass_json
@dataclass
class CompositeFilter:
    logic_operator: Optional[CompositeFilterLogicOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicOperator') }})
    sub_filters: Optional[List[Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subFilters') }})
    
