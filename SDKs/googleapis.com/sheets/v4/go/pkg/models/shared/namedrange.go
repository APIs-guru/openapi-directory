package shared

type NamedRange struct {
	Name         *string    `json:"name"`
	NamedRangeID *string    `json:"namedRangeId"`
	Range        *GridRange `json:"range"`
}
