package shared

type SchemaConfigSchemaTypeEnum string

const (
	SchemaConfigSchemaTypeEnumSchemaTypeUnspecified SchemaConfigSchemaTypeEnum = "SCHEMA_TYPE_UNSPECIFIED"
	SchemaConfigSchemaTypeEnumAnalytics             SchemaConfigSchemaTypeEnum = "ANALYTICS"
	SchemaConfigSchemaTypeEnumAnalyticsV2           SchemaConfigSchemaTypeEnum = "ANALYTICS_V2"
)

type SchemaConfig struct {
	RecursiveStructureDepth *string                     `json:"recursiveStructureDepth"`
	SchemaType              *SchemaConfigSchemaTypeEnum `json:"schemaType"`
}
