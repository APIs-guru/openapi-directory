package shared

type SourceLocation struct {
	Column *int32  `json:"column"`
	Line   *int32  `json:"line"`
	Path   *string `json:"path"`
}
