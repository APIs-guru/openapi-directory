package shared

// SignJwtRequest
// Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT request.
type SignJwtRequest struct {
	Payload *string `json:"payload,omitempty"`
}
