package shared

type Guardian struct {
	GuardianID          *string      `json:"guardianId"`
	GuardianProfile     *UserProfile `json:"guardianProfile"`
	InvitedEmailAddress *string      `json:"invitedEmailAddress"`
	StudentID           *string      `json:"studentId"`
}
