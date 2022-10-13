package shared

type ListAgentPoolsResponse struct {
	AgentPools    []AgentPool `json:"agentPools"`
	NextPageToken *string     `json:"nextPageToken"`
}
