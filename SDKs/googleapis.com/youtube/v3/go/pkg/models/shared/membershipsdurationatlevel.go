package shared

type MembershipsDurationAtLevel struct {
	Level                     *string `json:"level"`
	MemberSince               *string `json:"memberSince"`
	MemberTotalDurationMonths *int32  `json:"memberTotalDurationMonths"`
}
