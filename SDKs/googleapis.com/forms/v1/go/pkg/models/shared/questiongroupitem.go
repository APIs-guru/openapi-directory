package shared



type QuestionGroupItem struct {
    Grid *Grid `json:"grid,omitempty"`
    Image *Image `json:"image,omitempty"`
    Questions []Question `json:"questions,omitempty"`
    
}

