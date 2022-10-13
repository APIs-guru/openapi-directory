package shared

type GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum string

const (
	GoogleCloudDialogflowCxV3ContinuousTestResultResultEnumAggregatedTestResultUnspecified GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum = "AGGREGATED_TEST_RESULT_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ContinuousTestResultResultEnumPassed                          GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum = "PASSED"
	GoogleCloudDialogflowCxV3ContinuousTestResultResultEnumFailed                          GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3ContinuousTestResult struct {
	Name            *string                                                  `json:"name"`
	Result          *GoogleCloudDialogflowCxV3ContinuousTestResultResultEnum `json:"result"`
	RunTime         *string                                                  `json:"runTime"`
	TestCaseResults []string                                                 `json:"testCaseResults"`
}
