package shared

// SourceProvenance
// Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
type SourceProvenance struct {
	FileHashes                    map[string]FileHashes  `json:"fileHashes,omitempty"`
	ResolvedRepoSource            *RepoSource            `json:"resolvedRepoSource,omitempty"`
	ResolvedStorageSource         *StorageSource         `json:"resolvedStorageSource,omitempty"`
	ResolvedStorageSourceManifest *StorageSourceManifest `json:"resolvedStorageSourceManifest,omitempty"`
}

// SourceProvenanceInput
// Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
type SourceProvenanceInput struct {
	ResolvedRepoSource            *RepoSource            `json:"resolvedRepoSource,omitempty"`
	ResolvedStorageSource         *StorageSource         `json:"resolvedStorageSource,omitempty"`
	ResolvedStorageSourceManifest *StorageSourceManifest `json:"resolvedStorageSourceManifest,omitempty"`
}
