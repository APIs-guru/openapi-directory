from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypedValue:
    r"""TypedValue
    A single strongly-typed value.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    distribution_value: Optional[Distribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
