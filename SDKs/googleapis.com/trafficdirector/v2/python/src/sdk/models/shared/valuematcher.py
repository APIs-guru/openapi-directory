from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValueMatcher:
    r"""ValueMatcher
    Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
    """
    
    bool_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolMatch') }})
    double_match: Optional[DoubleMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleMatch') }})
    list_match: Optional[ListMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listMatch') }})
    null_match: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullMatch') }})
    present_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentMatch') }})
    string_match: Optional[StringMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringMatch') }})
    
