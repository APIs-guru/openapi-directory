package shared

// GoogleCloudPolicysimulatorV1ReplayInput
// A resource describing a `Replay`, or simulation.
type GoogleCloudPolicysimulatorV1ReplayInput struct {
	Config         *GoogleCloudPolicysimulatorV1ReplayConfig         `json:"config,omitempty"`
	ResultsSummary *GoogleCloudPolicysimulatorV1ReplayResultsSummary `json:"resultsSummary,omitempty"`
}
