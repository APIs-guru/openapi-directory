package shared

type Source struct {
	AdditionalContexts       []SourceContext       `json:"additionalContexts,omitempty"`
	ArtifactStorageSourceURI *string               `json:"artifactStorageSourceUri,omitempty"`
	Context                  *SourceContext        `json:"context,omitempty"`
	FileHashes               map[string]FileHashes `json:"fileHashes,omitempty"`
}
