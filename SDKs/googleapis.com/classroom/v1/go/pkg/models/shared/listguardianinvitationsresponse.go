package shared

// ListGuardianInvitationsResponse
// Response when listing guardian invitations.
type ListGuardianInvitationsResponse struct {
	GuardianInvitations []GuardianInvitation `json:"guardianInvitations,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
