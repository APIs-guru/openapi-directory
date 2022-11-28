package shared

// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput
// The output from the virtual agent.
type GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3PageInput                 `json:"currentPage,omitempty"`
	DiagnosticInfo    map[string]interface{}                              `json:"diagnosticInfo,omitempty"`
	SessionParameters map[string]interface{}                              `json:"sessionParameters,omitempty"`
	Status            *GoogleRPCStatus                                    `json:"status,omitempty"`
	TextResponses     []GoogleCloudDialogflowCxV3ResponseMessageTextInput `json:"textResponses,omitempty"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3Intent                    `json:"triggeredIntent,omitempty"`
}

// GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput
// The output from the virtual agent.
type GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3Page                 `json:"currentPage,omitempty"`
	DiagnosticInfo    map[string]interface{}                         `json:"diagnosticInfo,omitempty"`
	Differences       []GoogleCloudDialogflowCxV3TestRunDifference   `json:"differences,omitempty"`
	SessionParameters map[string]interface{}                         `json:"sessionParameters,omitempty"`
	Status            *GoogleRPCStatus                               `json:"status,omitempty"`
	TextResponses     []GoogleCloudDialogflowCxV3ResponseMessageText `json:"textResponses,omitempty"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3Intent               `json:"triggeredIntent,omitempty"`
}
