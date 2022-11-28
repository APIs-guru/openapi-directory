import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryConfig } from "./enterprisecrmeventbusprotoparamspecentryconfig";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition } from "./enterprisecrmeventbusprotoparamspecentryprotodefinition";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRule } from "./enterprisecrmeventbusprotoparamspecentryvalidationrule";
export declare enum EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum {
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
/**
 * Key-value pair of EventBus task parameters. Next id: 13
**/
export declare class EnterpriseCrmFrontendsEventbusProtoParamSpecEntry extends SpeakeasyBase {
    className?: string;
    collectionElementClassName?: string;
    config?: EnterpriseCrmEventbusProtoParamSpecEntryConfig;
    dataType?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
    defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
    isDeprecated?: boolean;
    isOutput?: boolean;
    jsonSchema?: string;
    key?: string;
    protoDef?: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;
    required?: boolean;
    validationRule?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
}
