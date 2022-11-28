package shared

// Meta
// Meta Data relevant to the payload
type Meta struct {
	FirstAvailableDateTime *string `json:"FirstAvailableDateTime,omitempty"`
	LastAvailableDateTime  *string `json:"LastAvailableDateTime,omitempty"`
	TotalPages             *int32  `json:"TotalPages,omitempty"`
}
