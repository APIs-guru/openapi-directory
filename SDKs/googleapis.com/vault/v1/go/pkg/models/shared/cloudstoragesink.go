package shared

type CloudStorageSink struct {
	Files []CloudStorageFile `json:"files,omitempty"`
}
