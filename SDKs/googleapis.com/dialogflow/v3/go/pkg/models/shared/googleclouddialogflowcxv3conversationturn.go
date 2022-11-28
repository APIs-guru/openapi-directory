package shared

// GoogleCloudDialogflowCxV3ConversationTurn
// One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
type GoogleCloudDialogflowCxV3ConversationTurn struct {
	UserInput          *GoogleCloudDialogflowCxV3ConversationTurnUserInput          `json:"userInput,omitempty"`
	VirtualAgentOutput *GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput `json:"virtualAgentOutput,omitempty"`
}

// GoogleCloudDialogflowCxV3ConversationTurnInput
// One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
type GoogleCloudDialogflowCxV3ConversationTurnInput struct {
	UserInput          *GoogleCloudDialogflowCxV3ConversationTurnUserInput               `json:"userInput,omitempty"`
	VirtualAgentOutput *GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput `json:"virtualAgentOutput,omitempty"`
}
