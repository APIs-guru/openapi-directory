package shared

type Size struct {
	Height *int32  `json:"height,omitempty"`
	Iab    *bool   `json:"iab,omitempty"`
	ID     *string `json:"id,omitempty"`
	Kind   *string `json:"kind,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
