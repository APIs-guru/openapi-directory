package shared

// FormatComplexity
// Information on the complexity of this Format.
type FormatComplexity struct {
	LodHint       *int32  `json:"lodHint,omitempty"`
	TriangleCount *string `json:"triangleCount,omitempty"`
}
