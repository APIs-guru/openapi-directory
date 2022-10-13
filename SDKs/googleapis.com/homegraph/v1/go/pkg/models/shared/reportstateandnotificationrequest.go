package shared

type ReportStateAndNotificationRequest struct {
	AgentUserID   *string                      `json:"agentUserId"`
	EventID       *string                      `json:"eventId"`
	FollowUpToken *string                      `json:"followUpToken"`
	Payload       *StateAndNotificationPayload `json:"payload"`
	RequestID     *string                      `json:"requestId"`
}
