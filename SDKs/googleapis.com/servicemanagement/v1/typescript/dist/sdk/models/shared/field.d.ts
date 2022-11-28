import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export declare enum FieldCardinalityEnum {
    CardinalityUnknown = "CARDINALITY_UNKNOWN",
    CardinalityOptional = "CARDINALITY_OPTIONAL",
    CardinalityRequired = "CARDINALITY_REQUIRED",
    CardinalityRepeated = "CARDINALITY_REPEATED"
}
export declare enum FieldKindEnum {
    TypeUnknown = "TYPE_UNKNOWN",
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
 * A single field of a message type.
**/
export declare class Field extends SpeakeasyBase {
    cardinality?: FieldCardinalityEnum;
    defaultValue?: string;
    jsonName?: string;
    kind?: FieldKindEnum;
    name?: string;
    number?: number;
    oneofIndex?: number;
    options?: Option[];
    packed?: boolean;
    typeUrl?: string;
}
