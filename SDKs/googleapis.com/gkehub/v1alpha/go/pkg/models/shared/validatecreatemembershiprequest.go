package shared

// ValidateCreateMembershipRequestInput
// Request message for the `GkeHub.ValidateCreateMembership` method.
type ValidateCreateMembershipRequestInput struct {
	Membership   *MembershipInput `json:"membership,omitempty"`
	MembershipID *string          `json:"membershipId,omitempty"`
}
