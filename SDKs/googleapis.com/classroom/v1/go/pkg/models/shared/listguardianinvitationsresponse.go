package shared

type ListGuardianInvitationsResponse struct {
	GuardianInvitations []GuardianInvitation `json:"guardianInvitations,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
