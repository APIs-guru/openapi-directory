package shared

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
