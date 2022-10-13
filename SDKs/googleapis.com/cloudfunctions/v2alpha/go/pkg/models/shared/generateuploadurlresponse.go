package shared

type GenerateUploadURLResponse struct {
	StorageSource *StorageSource `json:"storageSource"`
	UploadURL     *string        `json:"uploadUrl"`
}
