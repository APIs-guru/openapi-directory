package shared

type GoogleChromePolicyV1UpdateGroupPriorityOrderingRequest struct {
	GroupIds        []string                             `json:"groupIds"`
	PolicyNamespace *string                              `json:"policyNamespace"`
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
}
