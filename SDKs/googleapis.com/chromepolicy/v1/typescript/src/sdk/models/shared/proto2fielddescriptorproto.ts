import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Proto2FieldDescriptorProtoLabelEnum {
    LabelOptional = "LABEL_OPTIONAL",
    LabelRequired = "LABEL_REQUIRED",
    LabelRepeated = "LABEL_REPEATED"
}

export enum Proto2FieldDescriptorProtoTypeEnum {
    TypeDouble = "TYPE_DOUBLE",
    TypeFloat = "TYPE_FLOAT",
    TypeInt64 = "TYPE_INT64",
    TypeUint64 = "TYPE_UINT64",
    TypeInt32 = "TYPE_INT32",
    TypeFixed64 = "TYPE_FIXED64",
    TypeFixed32 = "TYPE_FIXED32",
    TypeBool = "TYPE_BOOL",
    TypeString = "TYPE_STRING",
    TypeGroup = "TYPE_GROUP",
    TypeMessage = "TYPE_MESSAGE",
    TypeBytes = "TYPE_BYTES",
    TypeUint32 = "TYPE_UINT32",
    TypeEnum = "TYPE_ENUM",
    TypeSfixed32 = "TYPE_SFIXED32",
    TypeSfixed64 = "TYPE_SFIXED64",
    TypeSint32 = "TYPE_SINT32",
    TypeSint64 = "TYPE_SINT64"
}


// Proto2FieldDescriptorProto
/** 
 * Describes a field within a message.
**/
export class Proto2FieldDescriptorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonName" })
  jsonName?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: Proto2FieldDescriptorProtoLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=oneofIndex" })
  oneofIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=proto3Optional" })
  proto3Optional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Proto2FieldDescriptorProtoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;
}
