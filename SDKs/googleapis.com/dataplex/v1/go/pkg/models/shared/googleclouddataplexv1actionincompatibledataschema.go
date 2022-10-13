package shared

type GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum string

const (
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumSchemaChangeUnspecified GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "SCHEMA_CHANGE_UNSPECIFIED"
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumIncompatible            GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "INCOMPATIBLE"
	GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnumModified                GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum = "MODIFIED"
)

type GoogleCloudDataplexV1ActionIncompatibleDataSchema struct {
	ExistingSchema       *string                                                            `json:"existingSchema"`
	NewSchema            *string                                                            `json:"newSchema"`
	SampledDataLocations []string                                                           `json:"sampledDataLocations"`
	SchemaChange         *GoogleCloudDataplexV1ActionIncompatibleDataSchemaSchemaChangeEnum `json:"schemaChange"`
	Table                *string                                                            `json:"table"`
}
