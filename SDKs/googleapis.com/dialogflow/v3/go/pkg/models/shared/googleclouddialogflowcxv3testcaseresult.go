package shared

type GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum string

const (
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumTestResultUnspecified GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumPassed                GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3TestCaseResultTestResultEnumFailed                GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3TestCaseResult struct {
	ConversationTurns []GoogleCloudDialogflowCxV3ConversationTurn            `json:"conversationTurns"`
	Environment       *string                                                `json:"environment"`
	Name              *string                                                `json:"name"`
	TestResult        *GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum `json:"testResult"`
	TestTime          *string                                                `json:"testTime"`
}
