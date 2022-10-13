package shared

type FamilyInfoMembership struct {
	AcquirePermission     *string `json:"acquirePermission"`
	AgeGroup              *string `json:"ageGroup"`
	AllowedMaturityRating *string `json:"allowedMaturityRating"`
	IsInFamily            *bool   `json:"isInFamily"`
	Role                  *string `json:"role"`
}

type FamilyInfo struct {
	Kind       *string               `json:"kind"`
	Membership *FamilyInfoMembership `json:"membership"`
}
