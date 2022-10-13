package shared

type SourceProvenance struct {
	FileHashes                    map[string]FileHashes  `json:"fileHashes"`
	ResolvedRepoSource            *RepoSource            `json:"resolvedRepoSource"`
	ResolvedStorageSource         *StorageSource         `json:"resolvedStorageSource"`
	ResolvedStorageSourceManifest *StorageSourceManifest `json:"resolvedStorageSourceManifest"`
}
