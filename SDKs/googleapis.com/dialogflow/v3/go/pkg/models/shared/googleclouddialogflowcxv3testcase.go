package shared

type GoogleCloudDialogflowCxV3TestCase struct {
	CreationTime              *string                                     `json:"creationTime"`
	DisplayName               *string                                     `json:"displayName"`
	LastTestResult            *GoogleCloudDialogflowCxV3TestCaseResult    `json:"lastTestResult"`
	Name                      *string                                     `json:"name"`
	Notes                     *string                                     `json:"notes"`
	Tags                      []string                                    `json:"tags"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3ConversationTurn `json:"testCaseConversationTurns"`
	TestConfig                *GoogleCloudDialogflowCxV3TestConfig        `json:"testConfig"`
}
