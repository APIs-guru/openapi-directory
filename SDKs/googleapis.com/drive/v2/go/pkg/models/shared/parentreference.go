package shared

// ParentReference
// A reference to a file's parent.
type ParentReference struct {
	ID         *string `json:"id,omitempty"`
	IsRoot     *bool   `json:"isRoot,omitempty"`
	Kind       *string `json:"kind,omitempty"`
	ParentLink *string `json:"parentLink,omitempty"`
	SelfLink   *string `json:"selfLink,omitempty"`
}
