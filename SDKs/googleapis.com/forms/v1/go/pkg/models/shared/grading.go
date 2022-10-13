package shared

type Grading struct {
	CorrectAnswers  *CorrectAnswers `json:"correctAnswers"`
	GeneralFeedback *Feedback       `json:"generalFeedback"`
	PointValue      *int32          `json:"pointValue"`
	WhenRight       *Feedback       `json:"whenRight"`
	WhenWrong       *Feedback       `json:"whenWrong"`
}
