package shared

// GenerateExclusivityManifestResponse
// The response of the exclusivity artifacts manifests for the client to apply.
type GenerateExclusivityManifestResponse struct {
	CrManifest  *string `json:"crManifest,omitempty"`
	CrdManifest *string `json:"crdManifest,omitempty"`
}
