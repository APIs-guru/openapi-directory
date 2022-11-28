from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepeatedEnumAttributeValue:
    r"""RepeatedEnumAttributeValue
    Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
    """
    
    set_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setValues') }})
    unset_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsetValues') }})
    
