import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1SchemaSchemaFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Required = "REQUIRED",
    Nullable = "NULLABLE",
    Repeated = "REPEATED"
}

export enum GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum {
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


// GoogleCloudDataplexV1SchemaSchemaField
/** 
 * Represents a column field within a table schema.
**/
export class GoogleCloudDataplexV1SchemaSchemaField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDataplexV1SchemaSchemaField })
  fields?: GoogleCloudDataplexV1SchemaSchemaField[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
}
