package shared

// GetAccountInfoResponse
// Response of getting account information.
type GetAccountInfoResponse struct {
	Kind  *string    `json:"kind,omitempty"`
	Users []UserInfo `json:"users,omitempty"`
}
