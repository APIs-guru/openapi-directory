package shared

type SoftwareRecipeStepCopyFile struct {
	ArtifactID  *string `json:"artifactId,omitempty"`
	Destination *string `json:"destination,omitempty"`
	Overwrite   *bool   `json:"overwrite,omitempty"`
	Permissions *string `json:"permissions,omitempty"`
}
