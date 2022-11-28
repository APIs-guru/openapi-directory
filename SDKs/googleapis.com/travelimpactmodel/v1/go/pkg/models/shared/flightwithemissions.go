package shared

// FlightWithEmissions
// Direct flight with emission estimates.
type FlightWithEmissions struct {
	EmissionsGramsPerPax *EmissionsGramsPerPax `json:"emissionsGramsPerPax,omitempty"`
	Flight               *Flight               `json:"flight,omitempty"`
}
