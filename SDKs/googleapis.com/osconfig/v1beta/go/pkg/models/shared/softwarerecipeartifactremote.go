package shared

type SoftwareRecipeArtifactRemote struct {
	Checksum *string `json:"checksum,omitempty"`
	URI      *string `json:"uri,omitempty"`
}
