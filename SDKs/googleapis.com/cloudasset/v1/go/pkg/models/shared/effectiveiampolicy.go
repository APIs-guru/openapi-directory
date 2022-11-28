package shared

// EffectiveIamPolicy
// The effective IAM policies on one resource.
type EffectiveIamPolicy struct {
	FullResourceName *string      `json:"fullResourceName,omitempty"`
	Policies         []PolicyInfo `json:"policies,omitempty"`
}
