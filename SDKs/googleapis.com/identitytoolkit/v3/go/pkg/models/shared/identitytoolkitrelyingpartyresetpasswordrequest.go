package shared

type IdentitytoolkitRelyingpartyResetPasswordRequest struct {
	Email       *string `json:"email"`
	NewPassword *string `json:"newPassword"`
	OldPassword *string `json:"oldPassword"`
	OobCode     *string `json:"oobCode"`
}
