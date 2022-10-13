package shared

type ListUserInvitationsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	UserInvitations []UserInvitation `json:"userInvitations"`
}
