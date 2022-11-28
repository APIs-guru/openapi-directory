import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResultMetadataDataTypeEnum {
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
/**
 * Result Metadata message contains metadata about the result returned after executing an Action.
**/
export declare class ResultMetadata extends SpeakeasyBase {
    dataType?: ResultMetadataDataTypeEnum;
    description?: string;
    name?: string;
}
