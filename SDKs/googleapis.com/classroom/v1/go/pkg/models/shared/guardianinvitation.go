package shared

type GuardianInvitationStateEnum string

const (
	GuardianInvitationStateEnumGuardianInvitationStateUnspecified GuardianInvitationStateEnum = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
	GuardianInvitationStateEnumPending                            GuardianInvitationStateEnum = "PENDING"
	GuardianInvitationStateEnumComplete                           GuardianInvitationStateEnum = "COMPLETE"
)

type GuardianInvitation struct {
	CreationTime        *string                      `json:"creationTime"`
	InvitationID        *string                      `json:"invitationId"`
	InvitedEmailAddress *string                      `json:"invitedEmailAddress"`
	State               *GuardianInvitationStateEnum `json:"state"`
	StudentID           *string                      `json:"studentId"`
}
