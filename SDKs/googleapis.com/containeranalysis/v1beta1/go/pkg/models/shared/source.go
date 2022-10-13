package shared

type Source struct {
	AdditionalContexts       []SourceContext       `json:"additionalContexts"`
	ArtifactStorageSourceURI *string               `json:"artifactStorageSourceUri"`
	Context                  *SourceContext        `json:"context"`
	FileHashes               map[string]FileHashes `json:"fileHashes"`
}
