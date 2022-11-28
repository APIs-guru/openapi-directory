package shared

// GoogleCloudIntegrationsV1alphaAuthToken
// The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header.
type GoogleCloudIntegrationsV1alphaAuthToken struct {
	Token *string `json:"token,omitempty"`
	Type  *string `json:"type,omitempty"`
}
