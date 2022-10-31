package shared

type GenerateUploadURLResponse struct {
	StorageSource *StorageSource `json:"storageSource,omitempty"`
	UploadURL     *string        `json:"uploadUrl,omitempty"`
}
