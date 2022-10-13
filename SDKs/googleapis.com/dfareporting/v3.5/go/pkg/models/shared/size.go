package shared

type Size struct {
	Height *int32  `json:"height"`
	Iab    *bool   `json:"iab"`
	ID     *string `json:"id"`
	Kind   *string `json:"kind"`
	Width  *int32  `json:"width"`
}
