package shared

// Guardian
// Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
type Guardian struct {
	GuardianID          *string      `json:"guardianId,omitempty"`
	GuardianProfile     *UserProfile `json:"guardianProfile,omitempty"`
	InvitedEmailAddress *string      `json:"invitedEmailAddress,omitempty"`
	StudentID           *string      `json:"studentId,omitempty"`
}
