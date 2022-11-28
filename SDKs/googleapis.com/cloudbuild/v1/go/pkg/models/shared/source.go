package shared

// Source
// Location of the source in a supported storage service.
type Source struct {
	RepoSource            *RepoSource            `json:"repoSource,omitempty"`
	StorageSource         *StorageSource         `json:"storageSource,omitempty"`
	StorageSourceManifest *StorageSourceManifest `json:"storageSourceManifest,omitempty"`
}
