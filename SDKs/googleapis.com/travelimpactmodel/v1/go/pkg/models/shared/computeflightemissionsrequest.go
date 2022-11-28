package shared

// ComputeFlightEmissionsRequest
// Input definition for the ComputeFlightEmissions request.
type ComputeFlightEmissionsRequest struct {
	Flights []Flight `json:"flights,omitempty"`
}
