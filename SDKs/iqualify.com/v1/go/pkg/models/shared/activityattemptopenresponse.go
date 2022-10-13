package shared

type ActivityAttemptOpenResponse struct {
	ActivityID    *string                              `json:"activityId"`
	ActivityType  *string                              `json:"activityType"`
	Feedback      *ActivityAttemptOpenResponseFeedback `json:"feedback"`
	LearnerEmail  *string                              `json:"learnerEmail"`
	OfferingID    *string                              `json:"offeringId"`
	ResponseText  *string                              `json:"responseText"`
	UploadedFiles *ActivityAttemptOpenResponseFiles    `json:"uploadedFiles"`
}
