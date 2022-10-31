package shared

import (
"time")

type QuizMarkResponse struct {
    Attempts *int32 `json:"attempts,omitempty"`
    LastAttemptAt *time.Time `json:"lastAttemptAt,omitempty"`
    LearnerEmail *string `json:"learnerEmail,omitempty"`
    LearnerFullname *string `json:"learnerFullname,omitempty"`
    LearnerPersonID *string `json:"learnerPersonId,omitempty"`
    Mark *string `json:"mark,omitempty"`
    QuizID *string `json:"quizId,omitempty"`
    QuizTitle *string `json:"quizTitle,omitempty"`
    
}

