package shared



type IdentitytoolkitRelyingpartyResetPasswordRequest struct {
    Email *string `json:"email,omitempty"`
    NewPassword *string `json:"newPassword,omitempty"`
    OldPassword *string `json:"oldPassword,omitempty"`
    OobCode *string `json:"oobCode,omitempty"`
    
}

