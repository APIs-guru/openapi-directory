package shared

type GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3Page                 `json:"currentPage,omitempty"`
	DiagnosticInfo    map[string]interface{}                         `json:"diagnosticInfo,omitempty"`
	Differences       []GoogleCloudDialogflowCxV3TestRunDifference   `json:"differences,omitempty"`
	SessionParameters map[string]interface{}                         `json:"sessionParameters,omitempty"`
	Status            *GoogleRPCStatus                               `json:"status,omitempty"`
	TextResponses     []GoogleCloudDialogflowCxV3ResponseMessageText `json:"textResponses,omitempty"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3Intent               `json:"triggeredIntent,omitempty"`
}
