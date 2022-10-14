package shared

type Source struct {
	RepoSource            *RepoSource            `json:"repoSource,omitempty"`
	StorageSource         *StorageSource         `json:"storageSource,omitempty"`
	StorageSourceManifest *StorageSourceManifest `json:"storageSourceManifest,omitempty"`
}
