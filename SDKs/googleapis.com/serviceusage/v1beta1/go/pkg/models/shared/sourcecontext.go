package shared

// SourceContext
// `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
type SourceContext struct {
	FileName *string `json:"fileName,omitempty"`
}
