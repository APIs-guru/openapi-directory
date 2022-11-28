package shared

// MembershipRole
// A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
type MembershipRole struct {
	ExpiryDetail           *ExpiryDetail           `json:"expiryDetail,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	RestrictionEvaluations *RestrictionEvaluations `json:"restrictionEvaluations,omitempty"`
}
