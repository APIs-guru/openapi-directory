package shared

// GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest
// Request message for updating the group priority ordering of an app.
type GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest struct {
	GroupIds        []string                                     `json:"groupIds,omitempty"`
	PolicyNamespace *string                                      `json:"policyNamespace,omitempty"`
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
