package shared

// GoogleCloudIntegrationsV1alphaServiceAccountCredentials
// Represents the service account which can be used to generate access token for authenticating the service call.
type GoogleCloudIntegrationsV1alphaServiceAccountCredentials struct {
	Scope          *string `json:"scope,omitempty"`
	ServiceAccount *string `json:"serviceAccount,omitempty"`
}
