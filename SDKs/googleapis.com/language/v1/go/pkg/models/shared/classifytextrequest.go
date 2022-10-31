package shared



type ClassifyTextRequest struct {
    ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions,omitempty"`
    Document *Document `json:"document,omitempty"`
    
}

