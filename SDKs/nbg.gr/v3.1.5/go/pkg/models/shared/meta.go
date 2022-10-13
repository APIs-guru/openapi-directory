package shared

type Meta struct {
	FirstAvailableDateTime *string `json:"FirstAvailableDateTime"`
	LastAvailableDateTime  *string `json:"LastAvailableDateTime"`
	TotalPages             *int32  `json:"TotalPages"`
}
