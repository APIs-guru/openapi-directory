package shared

// Question
// Any question. The specific type of question is known by its `kind`.
type Question struct {
	ChoiceQuestion     *ChoiceQuestion     `json:"choiceQuestion,omitempty"`
	DateQuestion       *DateQuestion       `json:"dateQuestion,omitempty"`
	FileUploadQuestion *FileUploadQuestion `json:"fileUploadQuestion,omitempty"`
	Grading            *Grading            `json:"grading,omitempty"`
	QuestionID         *string             `json:"questionId,omitempty"`
	Required           *bool               `json:"required,omitempty"`
	RowQuestion        *RowQuestion        `json:"rowQuestion,omitempty"`
	ScaleQuestion      *ScaleQuestion      `json:"scaleQuestion,omitempty"`
	TextQuestion       *TextQuestion       `json:"textQuestion,omitempty"`
	TimeQuestion       *TimeQuestion       `json:"timeQuestion,omitempty"`
}

// QuestionInput
// Any question. The specific type of question is known by its `kind`.
type QuestionInput struct {
	ChoiceQuestion     *ChoiceQuestionInput `json:"choiceQuestion,omitempty"`
	DateQuestion       *DateQuestion        `json:"dateQuestion,omitempty"`
	FileUploadQuestion *FileUploadQuestion  `json:"fileUploadQuestion,omitempty"`
	Grading            *Grading             `json:"grading,omitempty"`
	QuestionID         *string              `json:"questionId,omitempty"`
	Required           *bool                `json:"required,omitempty"`
	RowQuestion        *RowQuestion         `json:"rowQuestion,omitempty"`
	ScaleQuestion      *ScaleQuestion       `json:"scaleQuestion,omitempty"`
	TextQuestion       *TextQuestion        `json:"textQuestion,omitempty"`
	TimeQuestion       *TimeQuestion        `json:"timeQuestion,omitempty"`
}
