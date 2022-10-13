package shared

type IamPolicyAnalysisQuery struct {
	AccessSelector   *AccessSelector   `json:"accessSelector"`
	ConditionContext *ConditionContext `json:"conditionContext"`
	IdentitySelector *IdentitySelector `json:"identitySelector"`
	Options          *Options          `json:"options"`
	ResourceSelector *ResourceSelector `json:"resourceSelector"`
	Scope            *string           `json:"scope"`
}
