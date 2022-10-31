package shared

type GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum string

const (
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumAggregatedTestResultUnspecified GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumPassed                          GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumFailed                          GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3beta1ContinuousTestResult struct {
	Name            *string                                                       `json:"name,omitempty"`
	Result          *GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum `json:"result,omitempty"`
	RunTime         *string                                                       `json:"runTime,omitempty"`
	TestCaseResults []string                                                      `json:"testCaseResults,omitempty"`
}
