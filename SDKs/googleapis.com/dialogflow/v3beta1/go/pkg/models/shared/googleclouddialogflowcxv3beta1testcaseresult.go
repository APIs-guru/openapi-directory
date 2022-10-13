package shared

type GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum string

const (
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumTestResultUnspecified GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumPassed                GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnumFailed                GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3beta1TestCaseResult struct {
	ConversationTurns []GoogleCloudDialogflowCxV3beta1ConversationTurn            `json:"conversationTurns"`
	Environment       *string                                                     `json:"environment"`
	Name              *string                                                     `json:"name"`
	TestResult        *GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum `json:"testResult"`
	TestTime          *string                                                     `json:"testTime"`
}
