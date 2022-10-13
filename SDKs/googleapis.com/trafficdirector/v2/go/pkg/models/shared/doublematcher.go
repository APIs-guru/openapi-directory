package shared

type DoubleMatcher struct {
	Exact *float64     `json:"exact"`
	Range *DoubleRange `json:"range"`
}
