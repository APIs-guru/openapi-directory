package shared



type GcsObject struct {
    Bucket *string `json:"bucket,omitempty"`
    GenerationNumber *string `json:"generationNumber,omitempty"`
    Object *string `json:"object,omitempty"`
    
}

