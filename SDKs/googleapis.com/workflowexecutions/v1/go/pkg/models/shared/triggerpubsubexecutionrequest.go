package shared

// TriggerPubsubExecutionRequest
// Request for the TriggerPubsubExecution method.
type TriggerPubsubExecutionRequest struct {
	GcpCloudEventsMode *string        `json:"GCPCloudEventsMode,omitempty"`
	Message            *PubsubMessage `json:"message,omitempty"`
	Subscription       *string        `json:"subscription,omitempty"`
}
