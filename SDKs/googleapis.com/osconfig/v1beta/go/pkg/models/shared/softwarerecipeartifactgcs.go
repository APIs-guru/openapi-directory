package shared

// SoftwareRecipeArtifactGcs
// Specifies an artifact available as a Google Cloud Storage object.
type SoftwareRecipeArtifactGcs struct {
	Bucket     *string `json:"bucket,omitempty"`
	Generation *string `json:"generation,omitempty"`
	Object     *string `json:"object,omitempty"`
}
