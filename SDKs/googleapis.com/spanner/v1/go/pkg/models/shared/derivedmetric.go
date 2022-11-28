package shared

// DerivedMetric
// A message representing a derived metric.
type DerivedMetric struct {
	Denominator *LocalizedString `json:"denominator,omitempty"`
	Numerator   *LocalizedString `json:"numerator,omitempty"`
}
