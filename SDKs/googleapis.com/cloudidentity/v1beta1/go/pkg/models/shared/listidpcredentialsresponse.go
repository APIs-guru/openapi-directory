package shared

// ListIdpCredentialsResponse
// Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.
type ListIdpCredentialsResponse struct {
	IdpCredentials []IdpCredential `json:"idpCredentials,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
