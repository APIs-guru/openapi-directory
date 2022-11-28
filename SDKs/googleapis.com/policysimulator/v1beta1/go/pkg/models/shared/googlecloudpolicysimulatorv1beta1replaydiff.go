package shared

// GoogleCloudPolicysimulatorV1beta1ReplayDiff
// The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a member's access could change if the proposed policies were applied.
type GoogleCloudPolicysimulatorV1beta1ReplayDiff struct {
	AccessDiff *GoogleCloudPolicysimulatorV1beta1AccessStateDiff `json:"accessDiff,omitempty"`
}
