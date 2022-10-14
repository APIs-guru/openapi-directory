package shared

type GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum string

const (
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumSchemaChangeUnspecified GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "SCHEMA_CHANGE_UNSPECIFIED"
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumIncompatible            GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "INCOMPATIBLE"
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumModified                GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "MODIFIED"
)

type GoogleCloudDataplexV1ActionIncompatibleDataSchema struct {
	ExistingSchema       *string                                                            `json:"existingSchema,omitempty"`
	NewSchema            *string                                                            `json:"newSchema,omitempty"`
	SampledDataLocations []string                                                           `json:"sampledDataLocations,omitempty"`
	SchemaChange         *GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum `json:"schemaChange,omitempty"`
	Table                *string                                                            `json:"table,omitempty"`
}
