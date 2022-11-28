package shared

// IamPolicyAnalysisQuery
// IAM policy analysis query message.
type IamPolicyAnalysisQuery struct {
	AccessSelector   *AccessSelector   `json:"accessSelector,omitempty"`
	IdentitySelector *IdentitySelector `json:"identitySelector,omitempty"`
	Parent           *string           `json:"parent,omitempty"`
	ResourceSelector *ResourceSelector `json:"resourceSelector,omitempty"`
}
