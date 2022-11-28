package shared

// LatencyCriteria
// Parameters for a latency threshold SLI.
type LatencyCriteria struct {
	Threshold *string `json:"threshold,omitempty"`
}
