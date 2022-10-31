package shared



type GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest struct {
    GroupIds []string `json:"groupIds,omitempty"`
    PolicyNamespace *string `json:"policyNamespace,omitempty"`
    PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
    
}

