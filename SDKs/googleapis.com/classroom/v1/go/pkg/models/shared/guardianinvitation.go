package shared

type GuardianInvitationStateEnum string

const (
	GuardianInvitationStateEnumGuardianInvitationStateUnspecified GuardianInvitationStateEnum = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
	GuardianInvitationStateEnumPending                            GuardianInvitationStateEnum = "PENDING"
	GuardianInvitationStateEnumComplete                           GuardianInvitationStateEnum = "COMPLETE"
)

type GuardianInvitation struct {
	CreationTime        *string                      `json:"creationTime,omitempty"`
	InvitationID        *string                      `json:"invitationId,omitempty"`
	InvitedEmailAddress *string                      `json:"invitedEmailAddress,omitempty"`
	State               *GuardianInvitationStateEnum `json:"state,omitempty"`
	StudentID           *string                      `json:"studentId,omitempty"`
}
