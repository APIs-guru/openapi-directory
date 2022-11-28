package shared

// GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
// Withdraws MultiFactorAuth response.
type GoogleCloudIdentitytoolkitV2WithdrawMfaResponse struct {
	IDToken      *string `json:"idToken,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
}
