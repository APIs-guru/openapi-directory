package shared

type ACL struct {
	Description *string                `json:"description"`
	Items       []PlusAclentryResource `json:"items"`
	Kind        *string                `json:"kind"`
}
