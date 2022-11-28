import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoAttributes } from "./enterprisecrmeventbusprotoattributes";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoNodeIdentifier } from "./enterprisecrmeventbusprotonodeidentifier";
export declare enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    StringValue = "STRING_VALUE",
    IntValue = "INT_VALUE",
    DoubleValue = "DOUBLE_VALUE",
    BooleanValue = "BOOLEAN_VALUE",
    ProtoValue = "PROTO_VALUE",
    SerializedObjectValue = "SERIALIZED_OBJECT_VALUE",
    StringArray = "STRING_ARRAY",
    IntArray = "INT_ARRAY",
    DoubleArray = "DOUBLE_ARRAY",
    ProtoArray = "PROTO_ARRAY",
    ProtoEnum = "PROTO_ENUM",
    BooleanArray = "BOOLEAN_ARRAY",
    ProtoEnumArray = "PROTO_ENUM_ARRAY",
    Bytes = "BYTES",
    BytesArray = "BYTES_ARRAY",
    NonSerializableObject = "NON_SERIALIZABLE_OBJECT",
    JsonValue = "JSON_VALUE"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}
export declare class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry extends SpeakeasyBase {
    attributes?: EnterpriseCrmEventbusProtoAttributes;
    children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[];
    dataType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
    defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
    inOutType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
    isTransient?: boolean;
    jsonSchema?: string;
    key?: string;
    name?: string;
    producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier;
    producer?: string;
    protoDefName?: string;
    protoDefPath?: string;
}
