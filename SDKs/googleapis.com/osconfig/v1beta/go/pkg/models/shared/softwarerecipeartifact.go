package shared



type SoftwareRecipeArtifact struct {
    AllowInsecure *bool `json:"allowInsecure,omitempty"`
    Gcs *SoftwareRecipeArtifactGcs `json:"gcs,omitempty"`
    ID *string `json:"id,omitempty"`
    Remote *SoftwareRecipeArtifactRemote `json:"remote,omitempty"`
    
}

