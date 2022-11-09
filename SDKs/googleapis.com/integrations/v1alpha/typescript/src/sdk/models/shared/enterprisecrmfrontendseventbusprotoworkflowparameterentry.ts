import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoAttributes } from "./enterprisecrmeventbusprotoattributes";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry } from "./enterprisecrmfrontendseventbusprotoworkflowparameterentry";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoNodeIdentifier } from "./enterprisecrmeventbusprotonodeidentifier";

export enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED"
,    StringValue = "STRING_VALUE"
,    IntValue = "INT_VALUE"
,    DoubleValue = "DOUBLE_VALUE"
,    BooleanValue = "BOOLEAN_VALUE"
,    ProtoValue = "PROTO_VALUE"
,    SerializedObjectValue = "SERIALIZED_OBJECT_VALUE"
,    StringArray = "STRING_ARRAY"
,    IntArray = "INT_ARRAY"
,    DoubleArray = "DOUBLE_ARRAY"
,    ProtoArray = "PROTO_ARRAY"
,    ProtoEnum = "PROTO_ENUM"
,    BooleanArray = "BOOLEAN_ARRAY"
,    ProtoEnumArray = "PROTO_ENUM_ARRAY"
,    Bytes = "BYTES"
,    BytesArray = "BYTES_ARRAY"
,    NonSerializableObject = "NON_SERIALIZABLE_OBJECT"
,    JsonValue = "JSON_VALUE"
}

export enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED"
,    In = "IN"
,    Out = "OUT"
,    InOut = "IN_OUT"
}


export class EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: EnterpriseCrmEventbusProtoAttributes;

  @Metadata({ data: "json, name=children", elemType: shared.EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry })
  children?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry[];

  @Metadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

  @Metadata({ data: "json, name=inOutType" })
  inOutType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;

  @Metadata({ data: "json, name=isTransient" })
  isTransient?: boolean;

  @Metadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=producedBy" })
  producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier;

  @Metadata({ data: "json, name=producer" })
  producer?: string;

  @Metadata({ data: "json, name=protoDefName" })
  protoDefName?: string;

  @Metadata({ data: "json, name=protoDefPath" })
  protoDefPath?: string;
}
