package shared

type SourceProvenance struct {
	ResolvedRepoSource    *RepoSource    `json:"resolvedRepoSource"`
	ResolvedStorageSource *StorageSource `json:"resolvedStorageSource"`
}
