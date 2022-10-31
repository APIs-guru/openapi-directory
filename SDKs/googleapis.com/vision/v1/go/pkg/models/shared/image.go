package shared



type Image struct {
    Content *string `json:"content,omitempty"`
    Source *ImageSource `json:"source,omitempty"`
    
}

