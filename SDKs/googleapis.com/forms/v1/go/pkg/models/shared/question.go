package shared

type Question struct {
	ChoiceQuestion     *ChoiceQuestion     `json:"choiceQuestion"`
	DateQuestion       *DateQuestion       `json:"dateQuestion"`
	FileUploadQuestion *FileUploadQuestion `json:"fileUploadQuestion"`
	Grading            *Grading            `json:"grading"`
	QuestionID         *string             `json:"questionId"`
	Required           *bool               `json:"required"`
	RowQuestion        *RowQuestion        `json:"rowQuestion"`
	ScaleQuestion      *ScaleQuestion      `json:"scaleQuestion"`
	TextQuestion       *TextQuestion       `json:"textQuestion"`
	TimeQuestion       *TimeQuestion       `json:"timeQuestion"`
}
