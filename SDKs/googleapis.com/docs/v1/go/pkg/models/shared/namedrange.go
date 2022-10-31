package shared

type NamedRange struct {
	Name         *string `json:"name,omitempty"`
	NamedRangeID *string `json:"namedRangeId,omitempty"`
	Ranges       []Range `json:"ranges,omitempty"`
}
