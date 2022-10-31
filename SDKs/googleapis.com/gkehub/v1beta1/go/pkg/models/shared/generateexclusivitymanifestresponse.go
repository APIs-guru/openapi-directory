package shared



type GenerateExclusivityManifestResponse struct {
    CrManifest *string `json:"crManifest,omitempty"`
    CrdManifest *string `json:"crdManifest,omitempty"`
    
}

