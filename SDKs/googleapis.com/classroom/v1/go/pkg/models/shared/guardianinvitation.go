package shared

type GuardianInvitationStateEnum string

const (
	GuardianInvitationStateEnumGuardianInvitationStateUnspecified GuardianInvitationStateEnum = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
	GuardianInvitationStateEnumPending                            GuardianInvitationStateEnum = "PENDING"
	GuardianInvitationStateEnumComplete                           GuardianInvitationStateEnum = "COMPLETE"
)

// GuardianInvitation
// An invitation to become the guardian of a specified user, sent to a specified email address.
type GuardianInvitation struct {
	CreationTime        *string                      `json:"creationTime,omitempty"`
	InvitationID        *string                      `json:"invitationId,omitempty"`
	InvitedEmailAddress *string                      `json:"invitedEmailAddress,omitempty"`
	State               *GuardianInvitationStateEnum `json:"state,omitempty"`
	StudentID           *string                      `json:"studentId,omitempty"`
}
