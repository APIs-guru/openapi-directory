package shared

// GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
// Response message for listing the group priority ordering of an app.
type GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse struct {
	GroupIds        []string                                     `json:"groupIds,omitempty"`
	PolicyNamespace *string                                      `json:"policyNamespace,omitempty"`
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
