package shared

type NestedCable struct {
	ID    *int64  `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	URL   *string `json:"url,omitempty"`
}
