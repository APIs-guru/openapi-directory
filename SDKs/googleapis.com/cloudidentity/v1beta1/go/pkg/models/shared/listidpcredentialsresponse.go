package shared



type ListIdpCredentialsResponse struct {
    IdpCredentials []IdpCredential `json:"idpCredentials,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

