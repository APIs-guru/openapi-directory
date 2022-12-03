package shared

// CoverageValueWriteV1
// Coverage values assign specific values to coverage parameters.
type CoverageValueWriteV1 struct {
	ChildCoverageValues []CoverageValueWriteV1 `json:"child_coverage_values,omitempty"`
	CoverageParameterID string                 `json:"coverage_parameter_id"`
	Value               interface{}            `json:"value"`
}
