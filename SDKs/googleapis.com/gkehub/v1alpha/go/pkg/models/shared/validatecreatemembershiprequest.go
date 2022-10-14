package shared

type ValidateCreateMembershipRequest struct {
	Membership   *Membership `json:"membership,omitempty"`
	MembershipID *string     `json:"membershipId,omitempty"`
}
