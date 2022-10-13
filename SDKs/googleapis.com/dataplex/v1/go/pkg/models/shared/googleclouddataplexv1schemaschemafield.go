package shared

type GoogleCloudDataplexV1SchemaSchemaFieldModeEnum string

const (
	GoogleCloudDataplexV1SchemaSchemaFieldModeEnumModeUnspecified GoogleCloudDataplexV1SchemaSchemaFieldModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudDataplexV1SchemaSchemaFieldModeEnumRequired        GoogleCloudDataplexV1SchemaSchemaFieldModeEnum = "REQUIRED"
	GoogleCloudDataplexV1SchemaSchemaFieldModeEnumNullable        GoogleCloudDataplexV1SchemaSchemaFieldModeEnum = "NULLABLE"
	GoogleCloudDataplexV1SchemaSchemaFieldModeEnumRepeated        GoogleCloudDataplexV1SchemaSchemaFieldModeEnum = "REPEATED"
)

type GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum string

const (
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumTypeUnspecified GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumBoolean         GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "BOOLEAN"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumByte            GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "BYTE"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumInt16           GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "INT16"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumInt32           GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "INT32"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumInt64           GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "INT64"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumFloat           GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "FLOAT"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumDouble          GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "DOUBLE"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumDecimal         GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "DECIMAL"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumString          GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "STRING"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumBinary          GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "BINARY"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumTimestamp       GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "TIMESTAMP"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumDate            GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "DATE"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumTime            GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "TIME"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumRecord          GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "RECORD"
	GoogleCloudDataplexV1SchemaSchemaFieldTypeEnumNull            GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = "NULL"
)

type GoogleCloudDataplexV1SchemaSchemaField struct {
	Description *string                                         `json:"description"`
	Fields      []GoogleCloudDataplexV1SchemaSchemaField        `json:"fields"`
	Mode        *GoogleCloudDataplexV1SchemaSchemaFieldModeEnum `json:"mode"`
	Name        *string                                         `json:"name"`
	Type        *GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum `json:"type"`
}
