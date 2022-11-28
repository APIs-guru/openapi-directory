package shared

// GoogleCloudDialogflowCxV3beta1TestCaseInput
// Represents a test case.
type GoogleCloudDialogflowCxV3beta1TestCaseInput struct {
	DisplayName               *string                                               `json:"displayName,omitempty"`
	LastTestResult            *GoogleCloudDialogflowCxV3beta1TestCaseResultInput    `json:"lastTestResult,omitempty"`
	Name                      *string                                               `json:"name,omitempty"`
	Notes                     *string                                               `json:"notes,omitempty"`
	Tags                      []string                                              `json:"tags,omitempty"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurnInput `json:"testCaseConversationTurns,omitempty"`
	TestConfig                *GoogleCloudDialogflowCxV3beta1TestConfig             `json:"testConfig,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1TestCase
// Represents a test case.
type GoogleCloudDialogflowCxV3beta1TestCase struct {
	CreationTime              *string                                          `json:"creationTime,omitempty"`
	DisplayName               *string                                          `json:"displayName,omitempty"`
	LastTestResult            *GoogleCloudDialogflowCxV3beta1TestCaseResult    `json:"lastTestResult,omitempty"`
	Name                      *string                                          `json:"name,omitempty"`
	Notes                     *string                                          `json:"notes,omitempty"`
	Tags                      []string                                         `json:"tags,omitempty"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurn `json:"testCaseConversationTurns,omitempty"`
	TestConfig                *GoogleCloudDialogflowCxV3beta1TestConfig        `json:"testConfig,omitempty"`
}
