package shared



type PolicyDelegationSettings struct {
    IamPermission *string `json:"iamPermission,omitempty"`
    IamServiceName *string `json:"iamServiceName,omitempty"`
    PolicyName *PolicyName `json:"policyName,omitempty"`
    Resource *Resource `json:"resource,omitempty"`
    
}

