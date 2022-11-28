package shared

// Position
// Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
type Position struct {
	Column *string `json:"column,omitempty"`
	Length *string `json:"length,omitempty"`
	Line   *string `json:"line,omitempty"`
}
