package shared

type SyncResponsePayload struct {
	AgentUserID *string  `json:"agentUserId"`
	Devices     []Device `json:"devices"`
}
