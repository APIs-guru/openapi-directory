import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";


export enum EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum {
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


// EnterpriseCrmFrontendsEventbusProtoParameterEntry
/** 
 * Key-value pair of EventBus parameters.
**/
export class EnterpriseCrmFrontendsEventbusProtoParameterEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
}
