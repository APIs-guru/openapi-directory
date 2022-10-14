package shared

type GrafeasV1beta1IntotoArtifact struct {
	Hashes      *ArtifactHashes `json:"hashes,omitempty"`
	ResourceURI *string         `json:"resourceUri,omitempty"`
}
