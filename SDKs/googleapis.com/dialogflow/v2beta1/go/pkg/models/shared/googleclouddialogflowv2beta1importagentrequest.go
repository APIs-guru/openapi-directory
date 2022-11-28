package shared

// GoogleCloudDialogflowV2beta1ImportAgentRequest
// The request message for Agents.ImportAgent.
type GoogleCloudDialogflowV2beta1ImportAgentRequest struct {
	AgentContent *string `json:"agentContent,omitempty"`
	AgentURI     *string `json:"agentUri,omitempty"`
}
