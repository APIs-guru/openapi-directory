package shared

type GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum string

const (
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumTypeUnspecified GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumBoolean         GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "BOOLEAN"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumByte            GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "BYTE"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumInt16           GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "INT16"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumInt32           GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "INT32"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumInt64           GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "INT64"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumFloat           GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "FLOAT"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumDouble          GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "DOUBLE"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumDecimal         GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "DECIMAL"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumString          GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "STRING"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumBinary          GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "BINARY"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumTimestamp       GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "TIMESTAMP"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumDate            GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "DATE"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumTime            GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "TIME"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumRecord          GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "RECORD"
	GoogleCloudDataplexV1SchemaPartitionFieldTypeEnumNull            GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = "NULL"
)

// GoogleCloudDataplexV1SchemaPartitionField
// Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.
type GoogleCloudDataplexV1SchemaPartitionField struct {
	Name *string                                            `json:"name,omitempty"`
	Type *GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum `json:"type,omitempty"`
}
