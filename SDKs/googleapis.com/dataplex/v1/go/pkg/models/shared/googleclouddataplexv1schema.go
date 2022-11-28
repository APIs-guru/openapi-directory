package shared

type GoogleCloudDataplexV1SchemaPartitionStyleEnum string

const (
	GoogleCloudDataplexV1SchemaPartitionStyleEnumPartitionStyleUnspecified GoogleCloudDataplexV1SchemaPartitionStyleEnum = "PARTITION_STYLE_UNSPECIFIED"
	GoogleCloudDataplexV1SchemaPartitionStyleEnumHiveCompatible            GoogleCloudDataplexV1SchemaPartitionStyleEnum = "HIVE_COMPATIBLE"
)

// GoogleCloudDataplexV1Schema
// Schema information describing the structure and layout of the data.
type GoogleCloudDataplexV1Schema struct {
	Fields          []GoogleCloudDataplexV1SchemaSchemaField       `json:"fields,omitempty"`
	PartitionFields []GoogleCloudDataplexV1SchemaPartitionField    `json:"partitionFields,omitempty"`
	PartitionStyle  *GoogleCloudDataplexV1SchemaPartitionStyleEnum `json:"partitionStyle,omitempty"`
	UserManaged     *bool                                          `json:"userManaged,omitempty"`
}
