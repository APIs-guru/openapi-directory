package shared

type SoftwareRecipeStepCopyFile struct {
	ArtifactID  *string `json:"artifactId"`
	Destination *string `json:"destination"`
	Overwrite   *bool   `json:"overwrite"`
	Permissions *string `json:"permissions"`
}
