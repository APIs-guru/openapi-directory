package shared

type Source struct {
	AdditionalContexts    []GoogleDevtoolsContaineranalysisV1alpha1SourceContext `json:"additionalContexts,omitempty"`
	ArtifactStorageSource *StorageSource                                         `json:"artifactStorageSource,omitempty"`
	Context               *GoogleDevtoolsContaineranalysisV1alpha1SourceContext  `json:"context,omitempty"`
	FileHashes            map[string]FileHashes                                  `json:"fileHashes,omitempty"`
	RepoSource            *RepoSource                                            `json:"repoSource,omitempty"`
	StorageSource         *StorageSource                                         `json:"storageSource,omitempty"`
}
