package shared

type MembershipsDuration struct {
	MemberSince               *string `json:"memberSince"`
	MemberTotalDurationMonths *int32  `json:"memberTotalDurationMonths"`
}
