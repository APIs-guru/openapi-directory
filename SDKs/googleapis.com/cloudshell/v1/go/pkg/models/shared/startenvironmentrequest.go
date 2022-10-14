package shared

type StartEnvironmentRequest struct {
	AccessToken *string  `json:"accessToken,omitempty"`
	PublicKeys  []string `json:"publicKeys,omitempty"`
}
