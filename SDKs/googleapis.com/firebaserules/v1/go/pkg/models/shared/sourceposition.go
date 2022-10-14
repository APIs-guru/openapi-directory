package shared

type SourcePosition struct {
	Column        *int32  `json:"column,omitempty"`
	CurrentOffset *int32  `json:"currentOffset,omitempty"`
	EndOffset     *int32  `json:"endOffset,omitempty"`
	FileName      *string `json:"fileName,omitempty"`
	Line          *int32  `json:"line,omitempty"`
}
