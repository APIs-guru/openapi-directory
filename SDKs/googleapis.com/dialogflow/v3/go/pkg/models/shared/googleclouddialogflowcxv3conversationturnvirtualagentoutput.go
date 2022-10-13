package shared

type GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3Page                 `json:"currentPage"`
	DiagnosticInfo    map[string]interface{}                         `json:"diagnosticInfo"`
	Differences       []GoogleCloudDialogflowCxV3TestRunDifference   `json:"differences"`
	SessionParameters map[string]interface{}                         `json:"sessionParameters"`
	Status            *GoogleRPCStatus                               `json:"status"`
	TextResponses     []GoogleCloudDialogflowCxV3ResponseMessageText `json:"textResponses"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3Intent               `json:"triggeredIntent"`
}
