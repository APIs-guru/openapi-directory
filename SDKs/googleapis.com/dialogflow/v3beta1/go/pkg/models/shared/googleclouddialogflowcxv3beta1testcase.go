package shared

type GoogleCloudDialogflowCxV3beta1TestCase struct {
	CreationTime              *string                                          `json:"creationTime"`
	DisplayName               *string                                          `json:"displayName"`
	LastTestResult            *GoogleCloudDialogflowCxV3beta1TestCaseResult    `json:"lastTestResult"`
	Name                      *string                                          `json:"name"`
	Notes                     *string                                          `json:"notes"`
	Tags                      []string                                         `json:"tags"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurn `json:"testCaseConversationTurns"`
	TestConfig                *GoogleCloudDialogflowCxV3beta1TestConfig        `json:"testConfig"`
}
