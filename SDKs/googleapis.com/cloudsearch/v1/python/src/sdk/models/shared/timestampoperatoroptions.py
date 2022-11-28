from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimestampOperatorOptions:
    r"""TimestampOperatorOptions
    Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
    """
    
    greater_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greaterThanOperatorName') }})
    less_than_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lessThanOperatorName') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    
