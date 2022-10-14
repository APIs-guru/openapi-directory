package shared

type QueryRequest struct {
	AgentUserID *string             `json:"agentUserId,omitempty"`
	Inputs      []QueryRequestInput `json:"inputs,omitempty"`
	RequestID   *string             `json:"requestId,omitempty"`
}
