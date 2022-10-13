package shared

type GetAccountInfoResponse struct {
	Kind  *string    `json:"kind"`
	Users []UserInfo `json:"users"`
}
