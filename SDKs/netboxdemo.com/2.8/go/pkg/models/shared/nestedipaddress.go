package shared

type NestedIPAddress struct {
	Address string  `json:"address"`
	Family  *string `json:"family"`
	ID      *int64  `json:"id"`
	URL     *string `json:"url"`
}
