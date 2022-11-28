package shared

// ListUserInvitationsResponse
// Response message for UserInvitation listing request.
type ListUserInvitationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	UserInvitations []UserInvitation `json:"userInvitations,omitempty"`
}
