package shared

type GoogleChromePolicyV1ListGroupPriorityOrderingResponse struct {
	GroupIds        []string                             `json:"groupIds"`
	PolicyNamespace *string                              `json:"policyNamespace"`
	PolicyTargetKey *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
}
