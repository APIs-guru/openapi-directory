package shared

type ACLRuleScope struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type ACLRule struct {
	Etag  *string       `json:"etag"`
	ID    *string       `json:"id"`
	Kind  *string       `json:"kind"`
	Role  *string       `json:"role"`
	Scope *ACLRuleScope `json:"scope"`
}
