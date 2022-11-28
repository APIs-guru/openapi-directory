package shared

// GenerateUploadURLResponse
// Response of `GenerateSourceUploadUrl` method.
type GenerateUploadURLResponse struct {
	StorageSource *StorageSource `json:"storageSource,omitempty"`
	UploadURL     *string        `json:"uploadUrl,omitempty"`
}
