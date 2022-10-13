package shared

type GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum string

const (
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumRoutineTypeUnspecified GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "ROUTINE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumScalarFunction         GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "SCALAR_FUNCTION"
	GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnumProcedure              GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = "PROCEDURE"
)

type GoogleCloudDatacatalogV1RoutineSpec struct {
	BigqueryRoutineSpec *GoogleCloudDatacatalogV1BigQueryRoutineSpec        `json:"bigqueryRoutineSpec"`
	DefinitionBody      *string                                             `json:"definitionBody"`
	Language            *string                                             `json:"language"`
	ReturnType          *string                                             `json:"returnType"`
	RoutineArguments    []GoogleCloudDatacatalogV1RoutineSpecArgument       `json:"routineArguments"`
	RoutineType         *GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum `json:"routineType"`
}
