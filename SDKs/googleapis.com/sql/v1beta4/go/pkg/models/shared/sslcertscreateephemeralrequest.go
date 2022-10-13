package shared

type SslCertsCreateEphemeralRequest struct {
	AccessToken *string `json:"access_token"`
	PublicKey   *string `json:"public_key"`
}
