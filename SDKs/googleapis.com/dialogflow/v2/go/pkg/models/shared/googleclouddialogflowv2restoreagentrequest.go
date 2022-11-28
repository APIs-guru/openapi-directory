package shared

// GoogleCloudDialogflowV2RestoreAgentRequest
// The request message for Agents.RestoreAgent.
type GoogleCloudDialogflowV2RestoreAgentRequest struct {
	AgentContent *string `json:"agentContent,omitempty"`
	AgentURI     *string `json:"agentUri,omitempty"`
}
