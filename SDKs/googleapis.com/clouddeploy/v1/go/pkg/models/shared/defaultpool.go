package shared

type DefaultPool struct {
	ArtifactStorage *string `json:"artifactStorage"`
	ServiceAccount  *string `json:"serviceAccount"`
}
