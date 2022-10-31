package shared

type DerivedMetric struct {
	Denominator *LocalizedString `json:"denominator,omitempty"`
	Numerator   *LocalizedString `json:"numerator,omitempty"`
}
