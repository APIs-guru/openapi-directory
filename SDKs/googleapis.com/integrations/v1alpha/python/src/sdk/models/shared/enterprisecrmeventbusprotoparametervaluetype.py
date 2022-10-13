from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotobooleanparameterarray
from . import enterprisecrmeventbusprotodoubleparameterarray
from . import enterprisecrmeventbusprotointparameterarray
from . import enterprisecrmeventbusprotoprotoparameterarray
from . import enterprisecrmeventbusprotoserializedobjectparameter
from . import enterprisecrmeventbusprotostringparameterarray


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParameterValueType:
    boolean_array: Optional[enterprisecrmeventbusprotobooleanparameterarray.EnterpriseCrmEventbusProtoBooleanParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanArray' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_array: Optional[enterprisecrmeventbusprotodoubleparameterarray.EnterpriseCrmEventbusProtoDoubleParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleArray' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int_array: Optional[enterprisecrmeventbusprotointparameterarray.EnterpriseCrmEventbusProtoIntParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intArray' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    proto_array: Optional[enterprisecrmeventbusprotoprotoparameterarray.EnterpriseCrmEventbusProtoProtoParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoArray' }})
    proto_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoValue' }})
    serialized_object_value: Optional[enterprisecrmeventbusprotoserializedobjectparameter.EnterpriseCrmEventbusProtoSerializedObjectParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serializedObjectValue' }})
    string_array: Optional[enterprisecrmeventbusprotostringparameterarray.EnterpriseCrmEventbusProtoStringParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringArray' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
