package shared

type SourceLocation struct {
	Column *int32  `json:"column,omitempty"`
	Line   *int32  `json:"line,omitempty"`
	Path   *string `json:"path,omitempty"`
}
