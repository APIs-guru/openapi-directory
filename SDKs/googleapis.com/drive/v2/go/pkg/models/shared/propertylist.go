package shared

// PropertyList
// A collection of properties, key-value pairs that are either public or private to an application.
type PropertyList struct {
	Etag     *string    `json:"etag,omitempty"`
	Items    []Property `json:"items,omitempty"`
	Kind     *string    `json:"kind,omitempty"`
	SelfLink *string    `json:"selfLink,omitempty"`
}
