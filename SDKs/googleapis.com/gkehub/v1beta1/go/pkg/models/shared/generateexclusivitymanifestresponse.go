package shared

type GenerateExclusivityManifestResponse struct {
	CrManifest  *string `json:"crManifest"`
	CrdManifest *string `json:"crdManifest"`
}
