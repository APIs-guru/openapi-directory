package shared

// TenantProjectPolicy
// Describes policy settings that can be applied to a newly created tenant project.
type TenantProjectPolicy struct {
	PolicyBindings []PolicyBinding `json:"policyBindings,omitempty"`
}
