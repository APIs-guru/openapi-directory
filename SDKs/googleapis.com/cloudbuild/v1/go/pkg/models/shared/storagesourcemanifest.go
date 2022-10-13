package shared

type StorageSourceManifest struct {
	Bucket     *string `json:"bucket"`
	Generation *string `json:"generation"`
	Object     *string `json:"object"`
}
