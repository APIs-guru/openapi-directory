package shared

type UpdateUserPassword struct {
	CurrentPassword *string `json:"CurrentPassword"`
	CurrentPw       *string `json:"CurrentPw"`
	NewPw           *string `json:"NewPw"`
	ResetPassword   *bool   `json:"ResetPassword"`
}
