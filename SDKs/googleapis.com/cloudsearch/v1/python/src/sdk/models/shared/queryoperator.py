from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class QueryOperatorTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INTEGER = "INTEGER"
    DOUBLE = "DOUBLE"
    TIMESTAMP = "TIMESTAMP"
    BOOLEAN = "BOOLEAN"
    ENUM = "ENUM"
    DATE = "DATE"
    TEXT = "TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class QueryOperator:
    r"""QueryOperator
    The definition of a operator that can be used in a Search/Suggest request.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enum_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValues') }})
    greater_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greaterThanOperatorName') }})
    is_facetable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFacetable') }})
    is_repeatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRepeatable') }})
    is_returnable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReturnable') }})
    is_sortable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSortable') }})
    is_suggestable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuggestable') }})
    less_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lessThanOperatorName') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    type: Optional[QueryOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
