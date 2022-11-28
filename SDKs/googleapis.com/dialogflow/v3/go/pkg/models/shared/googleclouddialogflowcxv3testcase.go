package shared

// GoogleCloudDialogflowCxV3TestCaseInput
// Represents a test case.
type GoogleCloudDialogflowCxV3TestCaseInput struct {
	DisplayName               *string                                          `json:"displayName,omitempty"`
	LastTestResult            *GoogleCloudDialogflowCxV3TestCaseResultInput    `json:"lastTestResult,omitempty"`
	Name                      *string                                          `json:"name,omitempty"`
	Notes                     *string                                          `json:"notes,omitempty"`
	Tags                      []string                                         `json:"tags,omitempty"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3ConversationTurnInput `json:"testCaseConversationTurns,omitempty"`
	TestConfig                *GoogleCloudDialogflowCxV3TestConfig             `json:"testConfig,omitempty"`
}

// GoogleCloudDialogflowCxV3TestCase
// Represents a test case.
type GoogleCloudDialogflowCxV3TestCase struct {
	CreationTime              *string                                     `json:"creationTime,omitempty"`
	DisplayName               *string                                     `json:"displayName,omitempty"`
	LastTestResult            *GoogleCloudDialogflowCxV3TestCaseResult    `json:"lastTestResult,omitempty"`
	Name                      *string                                     `json:"name,omitempty"`
	Notes                     *string                                     `json:"notes,omitempty"`
	Tags                      []string                                    `json:"tags,omitempty"`
	TestCaseConversationTurns []GoogleCloudDialogflowCxV3ConversationTurn `json:"testCaseConversationTurns,omitempty"`
	TestConfig                *GoogleCloudDialogflowCxV3TestConfig        `json:"testConfig,omitempty"`
}
