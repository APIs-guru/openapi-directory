package shared

// ParentList
// A list of a file's parents.
type ParentList struct {
	Etag     *string           `json:"etag,omitempty"`
	Items    []ParentReference `json:"items,omitempty"`
	Kind     *string           `json:"kind,omitempty"`
	SelfLink *string           `json:"selfLink,omitempty"`
}
