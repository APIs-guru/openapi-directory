package shared

type SourceProvenance struct {
	FileHashes                    map[string]FileHashes  `json:"fileHashes,omitempty"`
	ResolvedRepoSource            *RepoSource            `json:"resolvedRepoSource,omitempty"`
	ResolvedStorageSource         *StorageSource         `json:"resolvedStorageSource,omitempty"`
	ResolvedStorageSourceManifest *StorageSourceManifest `json:"resolvedStorageSourceManifest,omitempty"`
}
