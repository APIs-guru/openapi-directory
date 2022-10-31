package shared



type UpdateUserEasyPassword struct {
    NewPassword *string `json:"NewPassword,omitempty"`
    NewPw *string `json:"NewPw,omitempty"`
    ResetPassword *bool `json:"ResetPassword,omitempty"`
    
}

