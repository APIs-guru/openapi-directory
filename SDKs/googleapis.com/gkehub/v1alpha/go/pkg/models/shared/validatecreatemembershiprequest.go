package shared

type ValidateCreateMembershipRequest struct {
	Membership   *Membership `json:"membership"`
	MembershipID *string     `json:"membershipId"`
}
