package shared



type Grading struct {
    CorrectAnswers *CorrectAnswers `json:"correctAnswers,omitempty"`
    GeneralFeedback *Feedback `json:"generalFeedback,omitempty"`
    PointValue *int32 `json:"pointValue,omitempty"`
    WhenRight *Feedback `json:"whenRight,omitempty"`
    WhenWrong *Feedback `json:"whenWrong,omitempty"`
    
}

