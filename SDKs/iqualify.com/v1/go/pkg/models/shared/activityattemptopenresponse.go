package shared



type ActivityAttemptOpenResponse struct {
    ActivityID *string `json:"activityId,omitempty"`
    ActivityType *string `json:"activityType,omitempty"`
    Feedback *ActivityAttemptOpenResponseFeedback `json:"feedback,omitempty"`
    LearnerEmail *string `json:"learnerEmail,omitempty"`
    OfferingID *string `json:"offeringId,omitempty"`
    ResponseText *string `json:"responseText,omitempty"`
    UploadedFiles *ActivityAttemptOpenResponseFiles `json:"uploadedFiles,omitempty"`
    
}

