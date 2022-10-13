package shared

type WritableAvailableIP struct {
	Address *string `json:"address"`
	Family  *int64  `json:"family"`
}
