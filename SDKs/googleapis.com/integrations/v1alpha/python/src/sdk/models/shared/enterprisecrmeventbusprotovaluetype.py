from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotodoublearray
from . import enterprisecrmeventbusprotointarray
from . import enterprisecrmeventbusprotostringarray


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoValueType:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_array: Optional[enterprisecrmeventbusprotodoublearray.EnterpriseCrmEventbusProtoDoubleArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleArray' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int_array: Optional[enterprisecrmeventbusprotointarray.EnterpriseCrmEventbusProtoIntArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intArray' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    proto_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoValue' }})
    string_array: Optional[enterprisecrmeventbusprotostringarray.EnterpriseCrmEventbusProtoStringArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringArray' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
