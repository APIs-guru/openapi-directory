package shared

// GenerateUploadURLRequest
// Request of `GenerateSourceUploadUrl` method.
type GenerateUploadURLRequest struct {
	KmsKeyName *string `json:"kmsKeyName,omitempty"`
}
