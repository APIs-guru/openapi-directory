package shared

type ParentList struct {
	Etag     *string           `json:"etag,omitempty"`
	Items    []ParentReference `json:"items,omitempty"`
	Kind     *string           `json:"kind,omitempty"`
	SelfLink *string           `json:"selfLink,omitempty"`
}
