package shared




type SchemaConfigSchemaTypeEnum string

const (
    SchemaConfigSchemaTypeEnumSchemaTypeUnspecified SchemaConfigSchemaTypeEnum = "SCHEMA_TYPE_UNSPECIFIED"
SchemaConfigSchemaTypeEnumLossless SchemaConfigSchemaTypeEnum = "LOSSLESS"
SchemaConfigSchemaTypeEnumAnalytics SchemaConfigSchemaTypeEnum = "ANALYTICS"
SchemaConfigSchemaTypeEnumAnalyticsV2 SchemaConfigSchemaTypeEnum = "ANALYTICS_V2"
)


type SchemaConfig struct {
    RecursiveStructureDepth *string `json:"recursiveStructureDepth,omitempty"`
    SchemaType *SchemaConfigSchemaTypeEnum `json:"schemaType,omitempty"`
    
}

