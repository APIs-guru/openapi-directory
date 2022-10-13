package shared

type PolicyDelegationSettings struct {
	IamPermission  *string     `json:"iamPermission"`
	IamServiceName *string     `json:"iamServiceName"`
	PolicyName     *PolicyName `json:"policyName"`
	Resource       *Resource   `json:"resource"`
}
