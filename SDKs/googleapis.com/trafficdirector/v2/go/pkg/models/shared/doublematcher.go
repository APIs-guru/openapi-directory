package shared

type DoubleMatcher struct {
	Exact *float64     `json:"exact,omitempty"`
	Range *DoubleRange `json:"range,omitempty"`
}
