package shared

type GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput struct {
	CurrentPage       *GoogleCloudDialogflowCxV3beta1Page                 `json:"currentPage,omitempty"`
	DiagnosticInfo    map[string]interface{}                              `json:"diagnosticInfo,omitempty"`
	Differences       []GoogleCloudDialogflowCxV3beta1TestRunDifference   `json:"differences,omitempty"`
	SessionParameters map[string]interface{}                              `json:"sessionParameters,omitempty"`
	Status            *GoogleRPCStatus                                    `json:"status,omitempty"`
	TextResponses     []GoogleCloudDialogflowCxV3beta1ResponseMessageText `json:"textResponses,omitempty"`
	TriggeredIntent   *GoogleCloudDialogflowCxV3beta1Intent               `json:"triggeredIntent,omitempty"`
}
