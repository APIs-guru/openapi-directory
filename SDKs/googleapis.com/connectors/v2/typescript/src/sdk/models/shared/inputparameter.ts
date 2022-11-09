import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InputParameterDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED"
,    Int = "INT"
,    Smallint = "SMALLINT"
,    Double = "DOUBLE"
,    Date = "DATE"
,    Datetime = "DATETIME"
,    Time = "TIME"
,    String = "STRING"
,    Long = "LONG"
,    Boolean = "BOOLEAN"
,    Decimal = "DECIMAL"
,    Uuid = "UUID"
,    Blob = "BLOB"
,    Bit = "BIT"
,    Tinyint = "TINYINT"
,    Integer = "INTEGER"
,    Bigint = "BIGINT"
,    Float = "FLOAT"
,    Real = "REAL"
,    Numeric = "NUMERIC"
,    Char = "CHAR"
,    Varchar = "VARCHAR"
,    Longvarchar = "LONGVARCHAR"
,    Timestamp = "TIMESTAMP"
,    Nchar = "NCHAR"
,    Nvarchar = "NVARCHAR"
,    Longnvarchar = "LONGNVARCHAR"
,    Null = "NULL"
,    Other = "OTHER"
,    JavaObject = "JAVA_OBJECT"
,    Distinct = "DISTINCT"
,    Struct = "STRUCT"
,    Array = "ARRAY"
,    Clob = "CLOB"
,    Ref = "REF"
,    Datalink = "DATALINK"
,    Rowid = "ROWID"
,    Binary = "BINARY"
,    Varbinary = "VARBINARY"
,    Longvarbinary = "LONGVARBINARY"
,    Nclob = "NCLOB"
,    Sqlxml = "SQLXML"
,    RefCursor = "REF_CURSOR"
,    TimeWithTimezone = "TIME_WITH_TIMEZONE"
,    TimestampWithTimezone = "TIMESTAMP_WITH_TIMEZONE"
}


// InputParameter
/** 
 * Input Parameter message contains metadata about the parameters required for executing an Action.
**/
export class InputParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: InputParameterDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nullable" })
  nullable?: boolean;
}
