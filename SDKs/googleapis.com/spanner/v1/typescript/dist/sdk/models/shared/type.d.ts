import { SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";
export declare enum TypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Float64 = "FLOAT64",
    Timestamp = "TIMESTAMP",
    Date = "DATE",
    String = "STRING",
    Bytes = "BYTES",
    Array = "ARRAY",
    Struct = "STRUCT",
    Numeric = "NUMERIC",
    Json = "JSON"
}
export declare enum TypeTypeAnnotationEnum {
    TypeAnnotationCodeUnspecified = "TYPE_ANNOTATION_CODE_UNSPECIFIED",
    PgNumeric = "PG_NUMERIC",
    PgJsonb = "PG_JSONB"
}
/**
 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
**/
export declare class Type extends SpeakeasyBase {
    arrayElementType?: Type;
    code?: TypeCodeEnum;
    structType?: StructType;
    typeAnnotation?: TypeTypeAnnotationEnum;
}
