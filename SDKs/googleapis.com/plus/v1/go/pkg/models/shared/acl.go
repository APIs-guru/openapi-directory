package shared

type ACL struct {
	Description *string                `json:"description,omitempty"`
	Items       []PlusAclentryResource `json:"items,omitempty"`
	Kind        *string                `json:"kind,omitempty"`
}
