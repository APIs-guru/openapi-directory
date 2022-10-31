package shared

type ListUserInvitationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	UserInvitations []UserInvitation `json:"userInvitations,omitempty"`
}
