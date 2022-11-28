package shared

// GoogleCloudDialogflowV2ImportAgentRequest
// The request message for Agents.ImportAgent.
type GoogleCloudDialogflowV2ImportAgentRequest struct {
	AgentContent *string `json:"agentContent,omitempty"`
	AgentURI     *string `json:"agentUri,omitempty"`
}
