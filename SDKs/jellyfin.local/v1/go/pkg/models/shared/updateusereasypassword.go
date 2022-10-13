package shared

type UpdateUserEasyPassword struct {
	NewPassword   *string `json:"NewPassword"`
	NewPw         *string `json:"NewPw"`
	ResetPassword *bool   `json:"ResetPassword"`
}
