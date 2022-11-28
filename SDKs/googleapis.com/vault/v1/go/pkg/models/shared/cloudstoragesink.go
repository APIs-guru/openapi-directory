package shared

// CloudStorageSink
// Export sink for Cloud Storage files.
type CloudStorageSink struct {
	Files []CloudStorageFile `json:"files,omitempty"`
}
