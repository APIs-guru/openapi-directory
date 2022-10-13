package shared

type PinRedeemResult struct {
	Success    *bool    `json:"Success"`
	UsersReset []string `json:"UsersReset"`
}
