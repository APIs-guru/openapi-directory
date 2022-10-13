package shared

type GoogleChromePolicyV1ListGroupPriorityOrderingRequest struct {
	PolicyNamespace *string                              `json:"policyNamespace"`
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
}
