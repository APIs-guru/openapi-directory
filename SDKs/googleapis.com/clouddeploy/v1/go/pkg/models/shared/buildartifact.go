package shared

type BuildArtifact struct {
	Image *string `json:"image"`
	Tag   *string `json:"tag"`
}
