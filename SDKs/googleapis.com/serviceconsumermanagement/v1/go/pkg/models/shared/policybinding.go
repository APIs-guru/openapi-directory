package shared

// PolicyBinding
// Translates to IAM Policy bindings (without auditing at this level)
type PolicyBinding struct {
	Members []string `json:"members,omitempty"`
	Role    *string  `json:"role,omitempty"`
}
