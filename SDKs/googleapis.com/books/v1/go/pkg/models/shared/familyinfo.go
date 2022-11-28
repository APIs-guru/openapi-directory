package shared

// FamilyInfoMembership
// Family membership info of the user that made the request.
type FamilyInfoMembership struct {
	AcquirePermission     *string `json:"acquirePermission,omitempty"`
	AgeGroup              *string `json:"ageGroup,omitempty"`
	AllowedMaturityRating *string `json:"allowedMaturityRating,omitempty"`
	IsInFamily            *bool   `json:"isInFamily,omitempty"`
	Role                  *string `json:"role,omitempty"`
}

type FamilyInfo struct {
	Kind       *string               `json:"kind,omitempty"`
	Membership *FamilyInfoMembership `json:"membership,omitempty"`
}
