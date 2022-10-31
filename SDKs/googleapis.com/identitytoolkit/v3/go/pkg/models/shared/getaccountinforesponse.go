package shared

type GetAccountInfoResponse struct {
	Kind  *string    `json:"kind,omitempty"`
	Users []UserInfo `json:"users,omitempty"`
}
