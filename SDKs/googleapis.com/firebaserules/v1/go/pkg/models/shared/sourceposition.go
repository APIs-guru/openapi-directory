package shared

type SourcePosition struct {
	Column        *int32  `json:"column"`
	CurrentOffset *int32  `json:"currentOffset"`
	EndOffset     *int32  `json:"endOffset"`
	FileName      *string `json:"fileName"`
	Line          *int32  `json:"line"`
}
