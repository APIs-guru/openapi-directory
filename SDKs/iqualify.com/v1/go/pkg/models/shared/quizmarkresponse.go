package shared

import (
	"time"
)

type QuizMarkResponse struct {
	Attempts        *int32     `json:"attempts"`
	LastAttemptAt   *time.Time `json:"lastAttemptAt"`
	LearnerEmail    *string    `json:"learnerEmail"`
	LearnerFullname *string    `json:"learnerFullname"`
	LearnerPersonID *string    `json:"learnerPersonId"`
	Mark            *string    `json:"mark"`
	QuizID          *string    `json:"quizId"`
	QuizTitle       *string    `json:"quizTitle"`
}
