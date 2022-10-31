package shared



type GoogleCloudDialogflowCxV3TestCase struct {
    CreationTime *string `json:"creationTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    LastTestResult *GoogleCloudDialogflowCxV3TestCaseResult `json:"lastTestResult,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Tags []string `json:"tags,omitempty"`
    TestCaseConversationTurns []GoogleCloudDialogflowCxV3ConversationTurn `json:"testCaseConversationTurns,omitempty"`
    TestConfig *GoogleCloudDialogflowCxV3TestConfig `json:"testConfig,omitempty"`
    
}

