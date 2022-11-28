package shared

type GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum string

const (
	GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumModeUnspecified GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumIn              GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum = "IN"
	GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumOut             GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum = "OUT"
	GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnumInout           GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum = "INOUT"
)

// GoogleCloudDatacatalogV1RoutineSpecArgument
// Input or output argument of a function or stored procedure.
type GoogleCloudDatacatalogV1RoutineSpecArgument struct {
	Mode *GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum `json:"mode,omitempty"`
	Name *string                                              `json:"name,omitempty"`
	Type *string                                              `json:"type,omitempty"`
}
