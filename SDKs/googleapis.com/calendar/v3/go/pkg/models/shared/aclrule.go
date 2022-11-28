package shared

// ACLRuleScope
// The extent to which calendar access is granted by this ACL rule.
type ACLRuleScope struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ACLRule struct {
	Etag  *string       `json:"etag,omitempty"`
	ID    *string       `json:"id,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
	Role  *string       `json:"role,omitempty"`
	Scope *ACLRuleScope `json:"scope,omitempty"`
}
