package shared



type Subject struct {
    Digest map[string]string `json:"digest,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

