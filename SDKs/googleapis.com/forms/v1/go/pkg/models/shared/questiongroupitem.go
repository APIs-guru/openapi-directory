package shared

// QuestionGroupItemInput
// Defines a question that comprises multiple questions grouped together.
type QuestionGroupItemInput struct {
	Grid      *GridInput      `json:"grid,omitempty"`
	Image     *ImageInput     `json:"image,omitempty"`
	Questions []QuestionInput `json:"questions,omitempty"`
}

// QuestionGroupItem
// Defines a question that comprises multiple questions grouped together.
type QuestionGroupItem struct {
	Grid      *Grid      `json:"grid,omitempty"`
	Image     *Image     `json:"image,omitempty"`
	Questions []Question `json:"questions,omitempty"`
}
