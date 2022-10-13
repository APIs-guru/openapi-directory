package shared

type ListIdpCredentialsResponse struct {
	IdpCredentials []IdpCredential `json:"idpCredentials"`
	NextPageToken  *string         `json:"nextPageToken"`
}
