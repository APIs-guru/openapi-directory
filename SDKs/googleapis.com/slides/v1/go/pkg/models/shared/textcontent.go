package shared



type TextContent struct {
    Lists map[string]List `json:"lists,omitempty"`
    TextElements []TextElement `json:"textElements,omitempty"`
    
}

