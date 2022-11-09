import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Option } from "./option";

export enum FieldCardinalityEnum {
    CardinalityUnknown = "CARDINALITY_UNKNOWN"
,    CardinalityOptional = "CARDINALITY_OPTIONAL"
,    CardinalityRequired = "CARDINALITY_REQUIRED"
,    CardinalityRepeated = "CARDINALITY_REPEATED"
}

export enum FieldKindEnum {
    TypeUnknown = "TYPE_UNKNOWN"
,    TypeDouble = "TYPE_DOUBLE"
,    TypeFloat = "TYPE_FLOAT"
,    TypeInt64 = "TYPE_INT64"
,    TypeUint64 = "TYPE_UINT64"
,    TypeInt32 = "TYPE_INT32"
,    TypeFixed64 = "TYPE_FIXED64"
,    TypeFixed32 = "TYPE_FIXED32"
,    TypeBool = "TYPE_BOOL"
,    TypeString = "TYPE_STRING"
,    TypeGroup = "TYPE_GROUP"
,    TypeMessage = "TYPE_MESSAGE"
,    TypeBytes = "TYPE_BYTES"
,    TypeUint32 = "TYPE_UINT32"
,    TypeEnum = "TYPE_ENUM"
,    TypeSfixed32 = "TYPE_SFIXED32"
,    TypeSfixed64 = "TYPE_SFIXED64"
,    TypeSint32 = "TYPE_SINT32"
,    TypeSint64 = "TYPE_SINT64"
}


// Field
/** 
 * A single field of a message type.
**/
export class Field extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardinality" })
  cardinality?: FieldCardinalityEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=jsonName" })
  jsonName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: FieldKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=oneofIndex" })
  oneofIndex?: number;

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=packed" })
  packed?: boolean;

  @Metadata({ data: "json, name=typeUrl" })
  typeUrl?: string;
}
