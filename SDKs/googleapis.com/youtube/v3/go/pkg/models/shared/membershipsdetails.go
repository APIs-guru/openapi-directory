package shared

type MembershipsDetails struct {
	AccessibleLevels                  []string                     `json:"accessibleLevels"`
	HighestAccessibleLevel            *string                      `json:"highestAccessibleLevel"`
	HighestAccessibleLevelDisplayName *string                      `json:"highestAccessibleLevelDisplayName"`
	MembershipsDuration               *MembershipsDuration         `json:"membershipsDuration"`
	MembershipsDurationAtLevels       []MembershipsDurationAtLevel `json:"membershipsDurationAtLevels"`
}
