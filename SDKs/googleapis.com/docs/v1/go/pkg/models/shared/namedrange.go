package shared

type NamedRange struct {
	Name         *string `json:"name"`
	NamedRangeID *string `json:"namedRangeId"`
	Ranges       []Range `json:"ranges"`
}
