package shared



type ReportStateAndNotificationRequest struct {
    AgentUserID *string `json:"agentUserId,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    FollowUpToken *string `json:"followUpToken,omitempty"`
    Payload *StateAndNotificationPayload `json:"payload,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

