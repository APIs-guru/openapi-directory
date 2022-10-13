package shared

type TriggerPubsubExecutionRequest struct {
	GcpCloudEventsMode *string        `json:"GCPCloudEventsMode"`
	Message            *PubsubMessage `json:"message"`
	Subscription       *string        `json:"subscription"`
}
