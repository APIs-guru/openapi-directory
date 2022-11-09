import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryConfig } from "./enterprisecrmeventbusprotoparamspecentryconfig";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition } from "./enterprisecrmeventbusprotoparamspecentryprotodefinition";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRule } from "./enterprisecrmeventbusprotoparamspecentryvalidationrule";

export enum EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum {
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


// EnterpriseCrmFrontendsEventbusProtoParamSpecEntry
/** 
 * Key-value pair of EventBus task parameters. Next id: 13
**/
export class EnterpriseCrmFrontendsEventbusProtoParamSpecEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=className" })
  className?: string;

  @Metadata({ data: "json, name=collectionElementClassName" })
  collectionElementClassName?: string;

  @Metadata({ data: "json, name=config" })
  config?: EnterpriseCrmEventbusProtoParamSpecEntryConfig;

  @Metadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

  @Metadata({ data: "json, name=isDeprecated" })
  isDeprecated?: boolean;

  @Metadata({ data: "json, name=isOutput" })
  isOutput?: boolean;

  @Metadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=protoDef" })
  protoDef?: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=validationRule" })
  validationRule?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
}
