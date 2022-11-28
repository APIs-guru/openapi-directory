package shared

// SoftwareRecipeArtifactRemote
// Specifies an artifact available via some URI.
type SoftwareRecipeArtifactRemote struct {
	Checksum *string `json:"checksum,omitempty"`
	URI      *string `json:"uri,omitempty"`
}
