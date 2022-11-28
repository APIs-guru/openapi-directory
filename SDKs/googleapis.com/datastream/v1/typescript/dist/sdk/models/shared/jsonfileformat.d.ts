import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JsonFileFormatCompressionEnum {
    JsonCompressionUnspecified = "JSON_COMPRESSION_UNSPECIFIED",
    NoCompression = "NO_COMPRESSION",
    Gzip = "GZIP"
}
export declare enum JsonFileFormatSchemaFileFormatEnum {
    SchemaFileFormatUnspecified = "SCHEMA_FILE_FORMAT_UNSPECIFIED",
    NoSchemaFile = "NO_SCHEMA_FILE",
    AvroSchemaFile = "AVRO_SCHEMA_FILE"
}
/**
 * JSON file format configuration.
**/
export declare class JsonFileFormat extends SpeakeasyBase {
    compression?: JsonFileFormatCompressionEnum;
    schemaFileFormat?: JsonFileFormatSchemaFileFormatEnum;
}
