package shared

// SourcePosition
// Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.
type SourcePosition struct {
	Column        *int32  `json:"column,omitempty"`
	CurrentOffset *int32  `json:"currentOffset,omitempty"`
	EndOffset     *int32  `json:"endOffset,omitempty"`
	FileName      *string `json:"fileName,omitempty"`
	Line          *int32  `json:"line,omitempty"`
}
