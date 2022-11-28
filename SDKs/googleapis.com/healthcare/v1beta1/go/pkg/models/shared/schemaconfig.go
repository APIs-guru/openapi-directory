package shared

type SchemaConfigSchemaTypeEnum string

const (
	SchemaConfigSchemaTypeEnumSchemaTypeUnspecified SchemaConfigSchemaTypeEnum = "SCHEMA_TYPE_UNSPECIFIED"
	SchemaConfigSchemaTypeEnumLossless              SchemaConfigSchemaTypeEnum = "LOSSLESS"
	SchemaConfigSchemaTypeEnumAnalytics             SchemaConfigSchemaTypeEnum = "ANALYTICS"
	SchemaConfigSchemaTypeEnumAnalyticsV2           SchemaConfigSchemaTypeEnum = "ANALYTICS_V2"
)

// SchemaConfig
// Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
type SchemaConfig struct {
	LastUpdatedPartitionConfig *TimePartitioning           `json:"lastUpdatedPartitionConfig,omitempty"`
	RecursiveStructureDepth    *string                     `json:"recursiveStructureDepth,omitempty"`
	SchemaType                 *SchemaConfigSchemaTypeEnum `json:"schemaType,omitempty"`
}
