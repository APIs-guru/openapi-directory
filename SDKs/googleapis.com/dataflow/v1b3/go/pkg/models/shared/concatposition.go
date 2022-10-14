package shared

type ConcatPosition struct {
	Index    *int32    `json:"index,omitempty"`
	Position *Position `json:"position,omitempty"`
}
