package shared

type Position struct {
	Column *string `json:"column,omitempty"`
	Length *string `json:"length,omitempty"`
	Line   *string `json:"line,omitempty"`
}
