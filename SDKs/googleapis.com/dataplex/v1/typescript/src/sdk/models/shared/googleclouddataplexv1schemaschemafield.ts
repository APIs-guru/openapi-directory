import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1SchemaSchemaField } from "./googleclouddataplexv1schemaschemafield";

export enum GoogleCloudDataplexV1SchemaSchemaFieldModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Required = "REQUIRED"
,    Nullable = "NULLABLE"
,    Repeated = "REPEATED"
}

export enum GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Boolean = "BOOLEAN"
,    Byte = "BYTE"
,    Int16 = "INT16"
,    Int32 = "INT32"
,    Int64 = "INT64"
,    Float = "FLOAT"
,    Double = "DOUBLE"
,    Decimal = "DECIMAL"
,    String = "STRING"
,    Binary = "BINARY"
,    Timestamp = "TIMESTAMP"
,    Date = "DATE"
,    Time = "TIME"
,    Record = "RECORD"
,    Null = "NULL"
}


// GoogleCloudDataplexV1SchemaSchemaField
/** 
 * Represents a column field within a table schema.
**/
export class GoogleCloudDataplexV1SchemaSchemaField extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDataplexV1SchemaSchemaField })
  fields?: GoogleCloudDataplexV1SchemaSchemaField[];

  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
}
