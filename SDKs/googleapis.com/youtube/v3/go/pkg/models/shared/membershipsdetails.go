package shared

type MembershipsDetails struct {
	AccessibleLevels                  []string                     `json:"accessibleLevels,omitempty"`
	HighestAccessibleLevel            *string                      `json:"highestAccessibleLevel,omitempty"`
	HighestAccessibleLevelDisplayName *string                      `json:"highestAccessibleLevelDisplayName,omitempty"`
	MembershipsDuration               *MembershipsDuration         `json:"membershipsDuration,omitempty"`
	MembershipsDurationAtLevels       []MembershipsDurationAtLevel `json:"membershipsDurationAtLevels,omitempty"`
}
