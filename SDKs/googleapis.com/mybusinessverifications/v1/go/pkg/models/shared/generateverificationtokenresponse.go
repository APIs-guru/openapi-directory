package shared

// GenerateVerificationTokenResponse
// Response message for Verifications.GenerateVerificationToken.
type GenerateVerificationTokenResponse struct {
	Token *VerificationToken `json:"token,omitempty"`
}
