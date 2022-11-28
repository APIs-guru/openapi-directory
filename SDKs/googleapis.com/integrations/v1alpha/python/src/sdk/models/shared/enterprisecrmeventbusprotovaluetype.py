from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoValueType:
    r"""EnterpriseCrmEventbusProtoValueType
    Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_array: Optional[EnterpriseCrmEventbusProtoDoubleArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleArray') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int_array: Optional[EnterpriseCrmEventbusProtoIntArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intArray') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    proto_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protoValue') }})
    string_array: Optional[EnterpriseCrmEventbusProtoStringArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringArray') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
