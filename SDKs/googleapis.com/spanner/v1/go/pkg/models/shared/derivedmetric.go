package shared

type DerivedMetric struct {
	Denominator *LocalizedString `json:"denominator"`
	Numerator   *LocalizedString `json:"numerator"`
}
