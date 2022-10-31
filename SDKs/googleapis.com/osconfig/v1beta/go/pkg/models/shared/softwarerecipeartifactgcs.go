package shared



type SoftwareRecipeArtifactGcs struct {
    Bucket *string `json:"bucket,omitempty"`
    Generation *string `json:"generation,omitempty"`
    Object *string `json:"object,omitempty"`
    
}

