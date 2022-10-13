package shared

type SoftwareRecipeArtifact struct {
	AllowInsecure *bool                         `json:"allowInsecure"`
	Gcs           *SoftwareRecipeArtifactGcs    `json:"gcs"`
	ID            *string                       `json:"id"`
	Remote        *SoftwareRecipeArtifactRemote `json:"remote"`
}
