package shared

// BuildArtifact
// Description of an a image to use during Skaffold rendering.
type BuildArtifact struct {
	Image *string `json:"image,omitempty"`
	Tag   *string `json:"tag,omitempty"`
}
