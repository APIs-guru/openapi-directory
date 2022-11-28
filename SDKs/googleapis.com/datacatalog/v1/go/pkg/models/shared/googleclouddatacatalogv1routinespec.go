package shared

type GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum string

const (
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumRoutineTypeUnspecified GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "ROUTINE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumScalarFunction         GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "SCALAR_FUNCTION"
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumProcedure              GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "PROCEDURE"
)

// GoogleCloudDatacatalogV1RoutineSpec
// Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
type GoogleCloudDatacatalogV1RoutineSpec struct {
	BigqueryRoutineSpec *GoogleCloudDatacatalogV1BigQueryRoutineSpec        `json:"bigqueryRoutineSpec,omitempty"`
	DefinitionBody      *string                                             `json:"definitionBody,omitempty"`
	Language            *string                                             `json:"language,omitempty"`
	ReturnType          *string                                             `json:"returnType,omitempty"`
	RoutineArguments    []GoogleCloudDatacatalogV1RoutineSpecArgument       `json:"routineArguments,omitempty"`
	RoutineType         *GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum `json:"routineType,omitempty"`
}
