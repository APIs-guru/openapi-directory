package shared

type Source struct {
	AdditionalContexts    []GoogleDevtoolsContaineranalysisV1alpha1SourceContext `json:"additionalContexts"`
	ArtifactStorageSource *StorageSource                                         `json:"artifactStorageSource"`
	Context               *GoogleDevtoolsContaineranalysisV1alpha1SourceContext  `json:"context"`
	FileHashes            map[string]FileHashes                                  `json:"fileHashes"`
	RepoSource            *RepoSource                                            `json:"repoSource"`
	StorageSource         *StorageSource                                         `json:"storageSource"`
}
