package shared

type SourceProvenance struct {
	ResolvedRepoSource    *RepoSource    `json:"resolvedRepoSource,omitempty"`
	ResolvedStorageSource *StorageSource `json:"resolvedStorageSource,omitempty"`
}
