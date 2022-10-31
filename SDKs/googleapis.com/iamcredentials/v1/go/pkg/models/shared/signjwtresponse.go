package shared

type SignJwtResponse struct {
	KeyID     *string `json:"keyId,omitempty"`
	SignedJwt *string `json:"signedJwt,omitempty"`
}
