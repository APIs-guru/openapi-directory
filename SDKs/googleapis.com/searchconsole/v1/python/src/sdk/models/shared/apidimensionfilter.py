from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""APIDimensionFilter
    A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.
    """
    
    dimension: Optional[APIDimensionFilterDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    operator: Optional[APIDimensionFilterOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
