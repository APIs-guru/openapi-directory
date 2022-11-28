package shared

// IamPolicyAnalysisQuery
// IAM policy analysis query message.
type IamPolicyAnalysisQuery struct {
	AccessSelector   *AccessSelector   `json:"accessSelector,omitempty"`
	ConditionContext *ConditionContext `json:"conditionContext,omitempty"`
	IdentitySelector *IdentitySelector `json:"identitySelector,omitempty"`
	Options          *Options          `json:"options,omitempty"`
	ResourceSelector *ResourceSelector `json:"resourceSelector,omitempty"`
	Scope            *string           `json:"scope,omitempty"`
}
