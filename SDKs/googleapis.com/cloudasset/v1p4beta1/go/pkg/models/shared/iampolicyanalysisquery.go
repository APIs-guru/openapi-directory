package shared

type IamPolicyAnalysisQuery struct {
	AccessSelector   *AccessSelector   `json:"accessSelector"`
	IdentitySelector *IdentitySelector `json:"identitySelector"`
	Parent           *string           `json:"parent"`
	ResourceSelector *ResourceSelector `json:"resourceSelector"`
}
