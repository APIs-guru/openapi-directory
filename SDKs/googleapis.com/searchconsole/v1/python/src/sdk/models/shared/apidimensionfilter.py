from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class APIDimensionFilterDimensionEnum(str, Enum):
    QUERY = "QUERY"
    PAGE = "PAGE"
    COUNTRY = "COUNTRY"
    DEVICE = "DEVICE"
    SEARCH_APPEARANCE = "SEARCH_APPEARANCE"

class APIDimensionFilterOperatorEnum(str, Enum):
    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"
    CONTAINS = "CONTAINS"
    NOT_CONTAINS = "NOT_CONTAINS"
    INCLUDING_REGEX = "INCLUDING_REGEX"
    EXCLUDING_REGEX = "EXCLUDING_REGEX"


@dataclass_json
@dataclass
class APIDimensionFilter:
    dimension: Optional[APIDimensionFilterDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    operator: Optional[APIDimensionFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
