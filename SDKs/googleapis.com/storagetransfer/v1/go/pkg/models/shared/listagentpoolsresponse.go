package shared

// ListAgentPoolsResponse
// Response from ListAgentPools.
type ListAgentPoolsResponse struct {
	AgentPools    []AgentPool `json:"agentPools,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
