import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Proto2FieldDescriptorProtoLabelEnum {
    LabelOptional = "LABEL_OPTIONAL",
    LabelRequired = "LABEL_REQUIRED",
    LabelRepeated = "LABEL_REPEATED"
}
export declare enum Proto2FieldDescriptorProtoTypeEnum {
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
/**
 * Describes a field within a message.
**/
export declare class Proto2FieldDescriptorProto extends SpeakeasyBase {
    defaultValue?: string;
    jsonName?: string;
    label?: Proto2FieldDescriptorProtoLabelEnum;
    name?: string;
    number?: number;
    oneofIndex?: number;
    proto3Optional?: boolean;
    type?: Proto2FieldDescriptorProtoTypeEnum;
    typeName?: string;
}
