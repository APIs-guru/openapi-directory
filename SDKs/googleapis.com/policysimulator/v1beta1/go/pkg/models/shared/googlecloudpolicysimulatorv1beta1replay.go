package shared

// GoogleCloudPolicysimulatorV1beta1ReplayInput
// A resource describing a `Replay`, or simulation.
type GoogleCloudPolicysimulatorV1beta1ReplayInput struct {
	Config         *GoogleCloudPolicysimulatorV1beta1ReplayConfig         `json:"config,omitempty"`
	ResultsSummary *GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary `json:"resultsSummary,omitempty"`
}
