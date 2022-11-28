import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";


export enum FieldDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Int = "INT",
    Smallint = "SMALLINT",
    Double = "DOUBLE",
    Date = "DATE",
    Datetime = "DATETIME",
    Time = "TIME",
    String = "STRING",
    Long = "LONG",
    Boolean = "BOOLEAN",
    Decimal = "DECIMAL",
    Uuid = "UUID",
    Blob = "BLOB",
    Bit = "BIT",
    Tinyint = "TINYINT",
    Integer = "INTEGER",
    Bigint = "BIGINT",
    Float = "FLOAT",
    Real = "REAL",
    Numeric = "NUMERIC",
    Char = "CHAR",
    Varchar = "VARCHAR",
    Longvarchar = "LONGVARCHAR",
    Timestamp = "TIMESTAMP",
    Nchar = "NCHAR",
    Nvarchar = "NVARCHAR",
    Longnvarchar = "LONGNVARCHAR",
    Null = "NULL",
    Other = "OTHER",
    JavaObject = "JAVA_OBJECT",
    Distinct = "DISTINCT",
    Struct = "STRUCT",
    Array = "ARRAY",
    Clob = "CLOB",
    Ref = "REF",
    Datalink = "DATALINK",
    Rowid = "ROWID",
    Binary = "BINARY",
    Varbinary = "VARBINARY",
    Longvarbinary = "LONGVARBINARY",
    Nclob = "NCLOB",
    Sqlxml = "SQLXML",
    RefCursor = "REF_CURSOR",
    TimeWithTimezone = "TIME_WITH_TIMEZONE",
    TimestampWithTimezone = "TIMESTAMP_WITH_TIMEZONE"
}


// Field
/** 
 * Message contains EntityType's Field metadata.
**/
export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDetails" })
  additionalDetails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: FieldDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: Reference;
}
