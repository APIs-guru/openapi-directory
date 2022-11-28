package shared

// SourceLocation
// Represents a location in the source code.
type SourceLocation struct {
	Column *int32  `json:"column,omitempty"`
	Line   *int32  `json:"line,omitempty"`
	Path   *string `json:"path,omitempty"`
}
