from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filter

class CompositeFilterLogicOperatorEnum(str, Enum):
    AND = "AND"
    OR = "OR"
    NOT = "NOT"


@dataclass_json
@dataclass
class CompositeFilter:
    logic_operator: Optional[CompositeFilterLogicOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicOperator' }})
    sub_filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subFilters' }})
    
