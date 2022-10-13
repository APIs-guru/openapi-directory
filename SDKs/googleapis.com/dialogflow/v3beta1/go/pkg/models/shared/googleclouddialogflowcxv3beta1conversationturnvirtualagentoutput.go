package shared

type GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3beta1Page                 `json:"currentPage"`
	DiagnosticInfo    map[string]interface{}                              `json:"diagnosticInfo"`
	Differences       []GoogleCloudDialogflowCxV3beta1TestRunDifference   `json:"differences"`
	SessionParameters map[string]interface{}                              `json:"sessionParameters"`
	Status            *GoogleRPCStatus                                    `json:"status"`
	TextResponses     []GoogleCloudDialogflowCxV3beta1ResponseMessageText `json:"textResponses"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3beta1Intent               `json:"triggeredIntent"`
}
