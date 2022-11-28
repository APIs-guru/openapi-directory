import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JsonFileFormatCompressionEnum {
    JsonCompressionUnspecified = "JSON_COMPRESSION_UNSPECIFIED",
    NoCompression = "NO_COMPRESSION",
    Gzip = "GZIP"
}

export enum JsonFileFormatSchemaFileFormatEnum {
    SchemaFileFormatUnspecified = "SCHEMA_FILE_FORMAT_UNSPECIFIED",
    NoSchemaFile = "NO_SCHEMA_FILE",
    AvroSchemaFile = "AVRO_SCHEMA_FILE"
}


// JsonFileFormat
/** 
 * JSON file format configuration.
**/
export class JsonFileFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compression" })
  compression?: JsonFileFormatCompressionEnum;

  @SpeakeasyMetadata({ data: "json, name=schemaFileFormat" })
  schemaFileFormat?: JsonFileFormatSchemaFileFormatEnum;
}
