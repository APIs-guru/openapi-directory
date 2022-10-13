package shared

type BatchGetEffectiveIamPoliciesResponse struct {
	PolicyResults []EffectiveIamPolicy `json:"policyResults"`
}
