package shared

type Source struct {
	RepoSource            *RepoSource            `json:"repoSource"`
	StorageSource         *StorageSource         `json:"storageSource"`
	StorageSourceManifest *StorageSourceManifest `json:"storageSourceManifest"`
}
