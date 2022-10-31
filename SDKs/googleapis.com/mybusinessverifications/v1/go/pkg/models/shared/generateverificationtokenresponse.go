package shared

type GenerateVerificationTokenResponse struct {
	Token *VerificationToken `json:"token,omitempty"`
}
