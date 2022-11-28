import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1SchemaSchemaFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Required = "REQUIRED",
    Nullable = "NULLABLE",
    Repeated = "REPEATED"
}
export declare enum GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    Byte = "BYTE",
    Int16 = "INT16",
    Int32 = "INT32",
    Int64 = "INT64",
    Float = "FLOAT",
    Double = "DOUBLE",
    Decimal = "DECIMAL",
    String = "STRING",
    Binary = "BINARY",
    Timestamp = "TIMESTAMP",
    Date = "DATE",
    Time = "TIME",
    Record = "RECORD",
    Null = "NULL"
}
/**
 * Represents a column field within a table schema.
**/
export declare class GoogleCloudDataplexV1SchemaSchemaField extends SpeakeasyBase {
    description?: string;
    fields?: GoogleCloudDataplexV1SchemaSchemaField[];
    mode?: GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
    name?: string;
    type?: GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
}
