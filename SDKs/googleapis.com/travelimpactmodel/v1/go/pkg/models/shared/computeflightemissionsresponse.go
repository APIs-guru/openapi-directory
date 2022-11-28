package shared

// ComputeFlightEmissionsResponse
// Output definition for the ComputeFlightEmissions response.
type ComputeFlightEmissionsResponse struct {
	FlightEmissions []FlightWithEmissions `json:"flightEmissions,omitempty"`
	ModelVersion    *ModelVersion         `json:"modelVersion,omitempty"`
}
