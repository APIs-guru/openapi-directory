package shared

type WritableAvailableIP struct {
	Address *string `json:"address,omitempty"`
	Family  *int64  `json:"family,omitempty"`
}
