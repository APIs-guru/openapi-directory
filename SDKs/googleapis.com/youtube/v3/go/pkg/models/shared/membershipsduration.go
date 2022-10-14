package shared

type MembershipsDuration struct {
	MemberSince               *string `json:"memberSince,omitempty"`
	MemberTotalDurationMonths *int32  `json:"memberTotalDurationMonths,omitempty"`
}
