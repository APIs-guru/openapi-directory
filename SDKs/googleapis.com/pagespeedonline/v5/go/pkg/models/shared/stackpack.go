package shared



type StackPack struct {
    Descriptions map[string]string `json:"descriptions,omitempty"`
    IconDataURL *string `json:"iconDataURL,omitempty"`
    ID *string `json:"id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

