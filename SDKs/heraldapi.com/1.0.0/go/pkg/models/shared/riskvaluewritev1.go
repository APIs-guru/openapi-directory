package shared

// RiskValueWriteV1
// Risk values assign specific values to risk parameters.
type RiskValueWriteV1 struct {
	ChildRiskValues []RiskValueWriteV1 `json:"child_risk_values,omitempty"`
	RiskParameterID string             `json:"risk_parameter_id"`
	Value           interface{}        `json:"value"`
}
