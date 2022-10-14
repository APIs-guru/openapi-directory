package shared

type PolicyBinding struct {
	Member *string `json:"member,omitempty"`
	Role   *string `json:"role,omitempty"`
}
