package shared

type GetOobConfirmationCodeResponse struct {
	Email   *string `json:"email"`
	Kind    *string `json:"kind"`
	OobCode *string `json:"oobCode"`
}
