package shared




type JSONFileFormatCompressionEnum string

const (
    JSONFileFormatCompressionEnumJSONCompressionUnspecified JSONFileFormatCompressionEnum = "JSON_COMPRESSION_UNSPECIFIED"
JSONFileFormatCompressionEnumNoCompression JSONFileFormatCompressionEnum = "NO_COMPRESSION"
JSONFileFormatCompressionEnumGzip JSONFileFormatCompressionEnum = "GZIP"
)



type JSONFileFormatSchemaFileFormatEnum string

const (
    JSONFileFormatSchemaFileFormatEnumSchemaFileFormatUnspecified JSONFileFormatSchemaFileFormatEnum = "SCHEMA_FILE_FORMAT_UNSPECIFIED"
JSONFileFormatSchemaFileFormatEnumNoSchemaFile JSONFileFormatSchemaFileFormatEnum = "NO_SCHEMA_FILE"
JSONFileFormatSchemaFileFormatEnumAvroSchemaFile JSONFileFormatSchemaFileFormatEnum = "AVRO_SCHEMA_FILE"
)


type JSONFileFormat struct {
    Compression *JSONFileFormatCompressionEnum `json:"compression,omitempty"`
    SchemaFileFormat *JSONFileFormatSchemaFileFormatEnum `json:"schemaFileFormat,omitempty"`
    
}

