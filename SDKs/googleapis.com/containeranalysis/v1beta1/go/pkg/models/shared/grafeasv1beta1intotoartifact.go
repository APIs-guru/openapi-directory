package shared

type GrafeasV1beta1IntotoArtifact struct {
	Hashes      *ArtifactHashes `json:"hashes"`
	ResourceURI *string         `json:"resourceUri"`
}
