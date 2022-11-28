package shared

// SignBlobResponse
// Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response.
type SignBlobResponse struct {
	KeyID     *string `json:"keyId,omitempty"`
	Signature *string `json:"signature,omitempty"`
}
