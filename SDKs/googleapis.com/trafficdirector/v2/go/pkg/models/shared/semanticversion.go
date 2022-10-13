package shared

type SemanticVersion struct {
	MajorNumber *int64 `json:"majorNumber"`
	MinorNumber *int64 `json:"minorNumber"`
	Patch       *int64 `json:"patch"`
}
