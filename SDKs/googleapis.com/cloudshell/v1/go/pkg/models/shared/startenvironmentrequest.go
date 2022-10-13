package shared

type StartEnvironmentRequest struct {
	AccessToken *string  `json:"accessToken"`
	PublicKeys  []string `json:"publicKeys"`
}
