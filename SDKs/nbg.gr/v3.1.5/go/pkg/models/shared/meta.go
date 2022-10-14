package shared

type Meta struct {
	FirstAvailableDateTime *string `json:"FirstAvailableDateTime,omitempty"`
	LastAvailableDateTime  *string `json:"LastAvailableDateTime,omitempty"`
	TotalPages             *int32  `json:"TotalPages,omitempty"`
}
