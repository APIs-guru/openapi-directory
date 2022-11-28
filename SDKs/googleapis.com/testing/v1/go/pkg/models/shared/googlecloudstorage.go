package shared

// GoogleCloudStorage
// A storage location within Google cloud storage (GCS).
type GoogleCloudStorage struct {
	GcsPath *string `json:"gcsPath,omitempty"`
}
