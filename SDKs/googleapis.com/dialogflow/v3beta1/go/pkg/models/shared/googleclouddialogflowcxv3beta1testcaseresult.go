package shared

type GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum string

const (
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumTestResultUnspecified GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumPassed                GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumFailed                GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "FAILED"
)

// GoogleCloudDialogflowCxV3beta1TestCaseResult
// Represents a result from running a test case in an agent environment.
type GoogleCloudDialogflowCxV3beta1TestCaseResult struct {
	ConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurn            `json:"conversationTurns,omitempty"`
	Environment       *string                                                     `json:"environment,omitempty"`
	Name              *string                                                     `json:"name,omitempty"`
	TestResult        *GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum `json:"testResult,omitempty"`
	TestTime          *string                                                     `json:"testTime,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1TestCaseResultInput
// Represents a result from running a test case in an agent environment.
type GoogleCloudDialogflowCxV3beta1TestCaseResultInput struct {
	ConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurnInput       `json:"conversationTurns,omitempty"`
	Environment       *string                                                     `json:"environment,omitempty"`
	Name              *string                                                     `json:"name,omitempty"`
	TestResult        *GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum `json:"testResult,omitempty"`
	TestTime          *string                                                     `json:"testTime,omitempty"`
}
