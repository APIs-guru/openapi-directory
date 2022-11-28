package shared

// StorageSourceManifest
// Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
type StorageSourceManifest struct {
	Bucket     *string `json:"bucket,omitempty"`
	Generation *string `json:"generation,omitempty"`
	Object     *string `json:"object,omitempty"`
}
