package shared

// BooleanPolicy
// Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
type BooleanPolicy struct {
	Enforced *bool `json:"enforced,omitempty"`
}
