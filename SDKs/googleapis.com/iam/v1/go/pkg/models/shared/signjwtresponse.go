package shared

type SignJwtResponse struct {
	KeyID     *string `json:"keyId"`
	SignedJwt *string `json:"signedJwt"`
}
