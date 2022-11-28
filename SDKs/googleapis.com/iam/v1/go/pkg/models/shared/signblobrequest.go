package shared

// SignBlobRequest
// Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request.
type SignBlobRequest struct {
	BytesToSign *string `json:"bytesToSign,omitempty"`
}
