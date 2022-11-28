package shared

// StorageSource
// Location of the source in an archive file in Google Cloud Storage.
type StorageSource struct {
	Bucket     *string `json:"bucket,omitempty"`
	Generation *string `json:"generation,omitempty"`
	Object     *string `json:"object,omitempty"`
}
