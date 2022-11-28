package shared

// PolicyBinding
// Grouping of IAM role and IAM member.
type PolicyBinding struct {
	Member *string `json:"member,omitempty"`
	Role   *string `json:"role,omitempty"`
}
