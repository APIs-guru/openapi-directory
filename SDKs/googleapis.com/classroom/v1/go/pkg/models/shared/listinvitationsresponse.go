package shared

// ListInvitationsResponse
// Response when listing invitations.
type ListInvitationsResponse struct {
	Invitations   []Invitation `json:"invitations,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
