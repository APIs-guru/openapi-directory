package shared

type ListGuardianInvitationsResponse struct {
	GuardianInvitations []GuardianInvitation `json:"guardianInvitations"`
	NextPageToken       *string              `json:"nextPageToken"`
}
