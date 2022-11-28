package shared

// GoogleCloudDialogflowV2beta1RestoreAgentRequest
// The request message for Agents.RestoreAgent.
type GoogleCloudDialogflowV2beta1RestoreAgentRequest struct {
	AgentContent *string `json:"agentContent,omitempty"`
	AgentURI     *string `json:"agentUri,omitempty"`
}
