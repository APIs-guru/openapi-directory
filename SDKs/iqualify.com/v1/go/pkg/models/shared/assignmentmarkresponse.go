package shared

import (
	"time"
)

type AssignmentMarkResponse struct {
	AssessmentID          *string    `json:"assessmentId"`
	AssessmentItemDetails *string    `json:"assessmentItemDetails"`
	AssessmentItemName    *string    `json:"assessmentItemName"`
	CourseName            *string    `json:"courseName"`
	LearnerEmail          *string    `json:"learnerEmail"`
	LearnerFirstName      *string    `json:"learnerFirstName"`
	LearnerLastName       *string    `json:"learnerLastName"`
	LearnerPersonID       *string    `json:"learnerPersonId"`
	Mark                  *string    `json:"mark"`
	MarkFeedback          *string    `json:"markFeedback"`
	MarkedBy              *string    `json:"markedBy"`
	MarkedByEvaluator     *bool      `json:"markedByEvaluator"`
	MarkedByFacilitator   *bool      `json:"markedByFacilitator"`
	MarkedByMarker        *bool      `json:"markedByMarker"`
	MarkedDateTime        *time.Time `json:"markedDateTime"`
	SubmissionDateTime    *time.Time `json:"submissionDateTime"`
}
