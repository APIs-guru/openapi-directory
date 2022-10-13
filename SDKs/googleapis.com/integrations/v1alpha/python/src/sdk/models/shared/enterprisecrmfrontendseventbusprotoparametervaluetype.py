from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprotobooleanparameterarray
from . import enterprisecrmfrontendseventbusprotodoubleparameterarray
from . import enterprisecrmfrontendseventbusprotointparameterarray
from . import enterprisecrmfrontendseventbusprotoprotoparameterarray
from . import enterprisecrmfrontendseventbusprotoserializedobjectparameter
from . import enterprisecrmfrontendseventbusprotostringparameterarray


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoParameterValueType:
    boolean_array: Optional[enterprisecrmfrontendseventbusprotobooleanparameterarray.EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanArray' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    double_array: Optional[enterprisecrmfrontendseventbusprotodoubleparameterarray.EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleArray' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int_array: Optional[enterprisecrmfrontendseventbusprotointparameterarray.EnterpriseCrmFrontendsEventbusProtoIntParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intArray' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    json_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonValue' }})
    proto_array: Optional[enterprisecrmfrontendseventbusprotoprotoparameterarray.EnterpriseCrmFrontendsEventbusProtoProtoParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoArray' }})
    proto_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protoValue' }})
    serialized_object_value: Optional[enterprisecrmfrontendseventbusprotoserializedobjectparameter.EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serializedObjectValue' }})
    string_array: Optional[enterprisecrmfrontendseventbusprotostringparameterarray.EnterpriseCrmFrontendsEventbusProtoStringParameterArray] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringArray' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
