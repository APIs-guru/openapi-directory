package shared

// SignJwtResponse
// Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
type SignJwtResponse struct {
	KeyID     *string `json:"keyId,omitempty"`
	SignedJwt *string `json:"signedJwt,omitempty"`
}
