package shared



type Notice struct {
    Description []string `json:"description,omitempty"`
    Links []Link `json:"links,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

