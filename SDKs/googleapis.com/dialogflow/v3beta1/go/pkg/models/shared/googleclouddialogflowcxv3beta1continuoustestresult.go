package shared

type GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum string

const (
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumAggregatedTestResultUnspecified GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumPassed                          GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnumFailed                          GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3beta1ContinuousTestResult struct {
	Name            *string                                                       `json:"name"`
	Result          *GoogleCloudDialogflowCxV3beta1ContinuousTestResultResultEnum `json:"result"`
	RunTime         *string                                                       `json:"runTime"`
	TestCaseResults []string                                                      `json:"testCaseResults"`
}
