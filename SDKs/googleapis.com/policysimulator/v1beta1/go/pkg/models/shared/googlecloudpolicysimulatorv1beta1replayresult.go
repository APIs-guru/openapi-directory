package shared

// GoogleCloudPolicysimulatorV1beta1ReplayResult
// The result of replaying a single access tuple against a simulated state.
type GoogleCloudPolicysimulatorV1beta1ReplayResult struct {
	AccessTuple  *GoogleCloudPolicysimulatorV1beta1AccessTuple `json:"accessTuple,omitempty"`
	Diff         *GoogleCloudPolicysimulatorV1beta1ReplayDiff  `json:"diff,omitempty"`
	Error        *GoogleRPCStatus                              `json:"error,omitempty"`
	LastSeenDate *GoogleTypeDate                               `json:"lastSeenDate,omitempty"`
	Name         *string                                       `json:"name,omitempty"`
	Parent       *string                                       `json:"parent,omitempty"`
}
