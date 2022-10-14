package shared

type FormatComplexity struct {
	LodHint       *int32  `json:"lodHint,omitempty"`
	TriangleCount *string `json:"triangleCount,omitempty"`
}
