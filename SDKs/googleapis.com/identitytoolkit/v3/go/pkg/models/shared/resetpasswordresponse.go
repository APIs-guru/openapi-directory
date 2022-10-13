package shared

type ResetPasswordResponse struct {
	Email       *string `json:"email"`
	Kind        *string `json:"kind"`
	NewEmail    *string `json:"newEmail"`
	RequestType *string `json:"requestType"`
}
