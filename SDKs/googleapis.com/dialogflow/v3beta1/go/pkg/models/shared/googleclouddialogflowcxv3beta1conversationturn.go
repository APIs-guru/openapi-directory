package shared

// GoogleCloudDialogflowCxV3beta1ConversationTurn
// One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
type GoogleCloudDialogflowCxV3beta1ConversationTurn struct {
	UserInput          *GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput          `json:"userInput,omitempty"`
	VirtualAgentOutput *GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput `json:"virtualAgentOutput,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ConversationTurnInput
// One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
type GoogleCloudDialogflowCxV3beta1ConversationTurnInput struct {
	UserInput          *GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput               `json:"userInput,omitempty"`
	VirtualAgentOutput *GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput `json:"virtualAgentOutput,omitempty"`
}
