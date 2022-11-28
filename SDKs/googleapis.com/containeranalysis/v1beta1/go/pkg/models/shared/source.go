package shared

// Source
// Source describes the location of the source used for the build.
type Source struct {
	AdditionalContexts       []SourceContext       `json:"additionalContexts,omitempty"`
	ArtifactStorageSourceURI *string               `json:"artifactStorageSourceUri,omitempty"`
	Context                  *SourceContext        `json:"context,omitempty"`
	FileHashes               map[string]FileHashes `json:"fileHashes,omitempty"`
}
