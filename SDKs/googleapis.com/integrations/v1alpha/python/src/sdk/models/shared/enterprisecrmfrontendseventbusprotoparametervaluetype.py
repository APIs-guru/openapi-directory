from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoParameterValueType:
    r"""EnterpriseCrmFrontendsEventbusProtoParameterValueType
    To support various types of parameter values. Next available id: 14
    """
    
    boolean_array: Optional[EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanArray') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_array: Optional[EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleArray') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int_array: Optional[EnterpriseCrmFrontendsEventbusProtoIntParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intArray') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    json_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonValue') }})
    proto_array: Optional[EnterpriseCrmFrontendsEventbusProtoProtoParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protoArray') }})
    proto_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protoValue') }})
    serialized_object_value: Optional[EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serializedObjectValue') }})
    string_array: Optional[EnterpriseCrmFrontendsEventbusProtoStringParameterArray] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringArray') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
