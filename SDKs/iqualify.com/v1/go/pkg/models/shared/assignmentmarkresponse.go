package shared

import (
	"time"
)

type AssignmentMarkResponse struct {
	AssessmentID          *string    `json:"assessmentId,omitempty"`
	AssessmentItemDetails *string    `json:"assessmentItemDetails,omitempty"`
	AssessmentItemName    *string    `json:"assessmentItemName,omitempty"`
	CourseName            *string    `json:"courseName,omitempty"`
	LearnerEmail          *string    `json:"learnerEmail,omitempty"`
	LearnerFirstName      *string    `json:"learnerFirstName,omitempty"`
	LearnerLastName       *string    `json:"learnerLastName,omitempty"`
	LearnerPersonID       *string    `json:"learnerPersonId,omitempty"`
	Mark                  *string    `json:"mark,omitempty"`
	MarkFeedback          *string    `json:"markFeedback,omitempty"`
	MarkedBy              *string    `json:"markedBy,omitempty"`
	MarkedByEvaluator     *bool      `json:"markedByEvaluator,omitempty"`
	MarkedByFacilitator   *bool      `json:"markedByFacilitator,omitempty"`
	MarkedByMarker        *bool      `json:"markedByMarker,omitempty"`
	MarkedDateTime        *time.Time `json:"markedDateTime,omitempty"`
	SubmissionDateTime    *time.Time `json:"submissionDateTime,omitempty"`
}
