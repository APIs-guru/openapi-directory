package shared

type SemanticVersion struct {
	MajorNumber *int64 `json:"majorNumber,omitempty"`
	MinorNumber *int64 `json:"minorNumber,omitempty"`
	Patch       *int64 `json:"patch,omitempty"`
}
