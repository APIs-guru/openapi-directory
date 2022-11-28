import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoAttributes } from "./enterprisecrmeventbusprotoattributes";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoNodeIdentifier } from "./enterprisecrmeventbusprotonodeidentifier";


export enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum {
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

export enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}


export class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: EnterpriseCrmEventbusProtoAttributes;

  @SpeakeasyMetadata({ data: "json, name=children", elemType: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry })
  children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[];

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

  @SpeakeasyMetadata({ data: "json, name=inOutType" })
  inOutType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isTransient" })
  isTransient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=producedBy" })
  producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier;

  @SpeakeasyMetadata({ data: "json, name=producer" })
  producer?: string;

  @SpeakeasyMetadata({ data: "json, name=protoDefName" })
  protoDefName?: string;

  @SpeakeasyMetadata({ data: "json, name=protoDefPath" })
  protoDefPath?: string;
}
