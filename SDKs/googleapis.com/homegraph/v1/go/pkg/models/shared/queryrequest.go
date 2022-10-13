package shared

type QueryRequest struct {
	AgentUserID *string             `json:"agentUserId"`
	Inputs      []QueryRequestInput `json:"inputs"`
	RequestID   *string             `json:"requestId"`
}
