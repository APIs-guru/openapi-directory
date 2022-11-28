import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";


export enum FieldCardinalityEnum {
    CardinalityUnknown = "CARDINALITY_UNKNOWN",
    CardinalityOptional = "CARDINALITY_OPTIONAL",
    CardinalityRequired = "CARDINALITY_REQUIRED",
    CardinalityRepeated = "CARDINALITY_REPEATED"
}

export enum FieldKindEnum {
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


// Field
/** 
 * A single field of a message type.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: FieldCardinalityEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonName" })
  jsonName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: FieldKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=oneofIndex" })
  oneofIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=packed" })
  packed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=typeUrl" })
  typeUrl?: string;
}
