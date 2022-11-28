package shared

// BatchGetEffectiveIamPoliciesResponse
// A response message for AssetService.BatchGetEffectiveIamPolicies.
type BatchGetEffectiveIamPoliciesResponse struct {
	PolicyResults []EffectiveIamPolicy `json:"policyResults,omitempty"`
}
