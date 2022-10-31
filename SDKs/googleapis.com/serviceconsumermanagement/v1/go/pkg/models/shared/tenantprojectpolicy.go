package shared

type TenantProjectPolicy struct {
	PolicyBindings []PolicyBinding `json:"policyBindings,omitempty"`
}
