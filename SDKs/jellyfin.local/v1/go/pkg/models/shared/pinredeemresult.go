package shared

type PinRedeemResult struct {
	Success    *bool    `json:"Success,omitempty"`
	UsersReset []string `json:"UsersReset,omitempty"`
}
