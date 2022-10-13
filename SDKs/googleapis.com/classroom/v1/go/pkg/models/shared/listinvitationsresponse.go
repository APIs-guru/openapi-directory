package shared

type ListInvitationsResponse struct {
	Invitations   []Invitation `json:"invitations"`
	NextPageToken *string      `json:"nextPageToken"`
}
