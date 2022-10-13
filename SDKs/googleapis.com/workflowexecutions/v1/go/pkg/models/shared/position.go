package shared

type Position struct {
	Column *string `json:"column"`
	Length *string `json:"length"`
	Line   *string `json:"line"`
}
