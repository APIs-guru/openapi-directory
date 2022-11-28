package shared

// SourceProvenance
// Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
type SourceProvenance struct {
	ResolvedRepoSource    *RepoSource    `json:"resolvedRepoSource,omitempty"`
	ResolvedStorageSource *StorageSource `json:"resolvedStorageSource,omitempty"`
}
