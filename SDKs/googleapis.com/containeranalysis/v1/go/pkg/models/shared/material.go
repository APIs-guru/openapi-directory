package shared



type Material struct {
    Digest map[string]string `json:"digest,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

