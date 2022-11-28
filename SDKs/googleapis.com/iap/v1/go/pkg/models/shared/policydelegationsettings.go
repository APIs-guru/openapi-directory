package shared

// PolicyDelegationSettings
// PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
type PolicyDelegationSettings struct {
	IamPermission  *string     `json:"iamPermission,omitempty"`
	IamServiceName *string     `json:"iamServiceName,omitempty"`
	PolicyName     *PolicyName `json:"policyName,omitempty"`
	Resource       *Resource   `json:"resource,omitempty"`
}
