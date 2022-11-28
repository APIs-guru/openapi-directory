package shared

// UploadServiceAccountKeyRequest
// The service account key upload request.
type UploadServiceAccountKeyRequest struct {
	PublicKeyData *string `json:"publicKeyData,omitempty"`
}
