package shared

// ListInvitationsResponse
// Response message for AccessControl.ListInvitations.
type ListInvitationsResponse struct {
	Invitations []Invitation `json:"invitations,omitempty"`
}
