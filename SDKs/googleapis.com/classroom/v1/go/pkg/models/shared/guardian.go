package shared

type Guardian struct {
	GuardianID          *string      `json:"guardianId,omitempty"`
	GuardianProfile     *UserProfile `json:"guardianProfile,omitempty"`
	InvitedEmailAddress *string      `json:"invitedEmailAddress,omitempty"`
	StudentID           *string      `json:"studentId,omitempty"`
}
