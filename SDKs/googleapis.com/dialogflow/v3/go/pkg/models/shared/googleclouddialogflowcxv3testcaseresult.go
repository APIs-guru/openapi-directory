package shared

type GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum string

const (
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumTestResultUnspecified GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumPassed                GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumFailed                GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "FAILED"
)

// GoogleCloudDialogflowCxV3TestCaseResultInput
// Represents a result from running a test case in an agent environment.
type GoogleCloudDialogflowCxV3TestCaseResultInput struct {
	ConversationTurns []GoogleCloudDialogflowCxV3ConversationTurnInput       `json:"conversationTurns,omitempty"`
	Environment       *string                                                `json:"environment,omitempty"`
	Name              *string                                                `json:"name,omitempty"`
	TestResult        *GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum `json:"testResult,omitempty"`
	TestTime          *string                                                `json:"testTime,omitempty"`
}

// GoogleCloudDialogflowCxV3TestCaseResult
// Represents a result from running a test case in an agent environment.
type GoogleCloudDialogflowCxV3TestCaseResult struct {
	ConversationTurns []GoogleCloudDialogflowCxV3ConversationTurn            `json:"conversationTurns,omitempty"`
	Environment       *string                                                `json:"environment,omitempty"`
	Name              *string                                                `json:"name,omitempty"`
	TestResult        *GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum `json:"testResult,omitempty"`
	TestTime          *string                                                `json:"testTime,omitempty"`
}
