package shared

// AnalyzerOrgPolicyConstraint
// The organization policy constraint definition.
type AnalyzerOrgPolicyConstraint struct {
	CustomConstraint        *GoogleCloudAssetV1CustomConstraint `json:"customConstraint,omitempty"`
	GoogleDefinedConstraint *GoogleCloudAssetV1Constraint       `json:"googleDefinedConstraint,omitempty"`
}
