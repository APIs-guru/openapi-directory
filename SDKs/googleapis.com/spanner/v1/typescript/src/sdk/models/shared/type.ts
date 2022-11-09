import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Type } from "./type";
import { StructType } from "./structtype";

export enum TypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED"
,    Bool = "BOOL"
,    Int64 = "INT64"
,    Float64 = "FLOAT64"
,    Timestamp = "TIMESTAMP"
,    Date = "DATE"
,    String = "STRING"
,    Bytes = "BYTES"
,    Array = "ARRAY"
,    Struct = "STRUCT"
,    Numeric = "NUMERIC"
,    Json = "JSON"
}

export enum TypeTypeAnnotationEnum {
    TypeAnnotationCodeUnspecified = "TYPE_ANNOTATION_CODE_UNSPECIFIED"
,    PgNumeric = "PG_NUMERIC"
,    PgJsonb = "PG_JSONB"
}


// Type
/** 
 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
**/
export class Type extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayElementType" })
  arrayElementType?: Type;

  @Metadata({ data: "json, name=code" })
  code?: TypeCodeEnum;

  @Metadata({ data: "json, name=structType" })
  structType?: StructType;

  @Metadata({ data: "json, name=typeAnnotation" })
  typeAnnotation?: TypeTypeAnnotationEnum;
}
