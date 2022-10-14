package shared

type PropertyList struct {
	Etag     *string    `json:"etag,omitempty"`
	Items    []Property `json:"items,omitempty"`
	Kind     *string    `json:"kind,omitempty"`
	SelfLink *string    `json:"selfLink,omitempty"`
}
