package shared

// GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest
// Request message for listing the group priority ordering of an app.
type GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest struct {
	PolicyNamespace *string                                      `json:"policyNamespace,omitempty"`
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
