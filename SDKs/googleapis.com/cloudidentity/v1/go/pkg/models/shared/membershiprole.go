package shared

type MembershipRole struct {
	ExpiryDetail           *ExpiryDetail           `json:"expiryDetail"`
	Name                   *string                 `json:"name"`
	RestrictionEvaluations *RestrictionEvaluations `json:"restrictionEvaluations"`
}
