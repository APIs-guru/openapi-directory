package shared

type RunMobileFriendlyTestResponseMobileFriendlinessEnum string

const (
	RunMobileFriendlyTestResponseMobileFriendlinessEnumMobileFriendlyTestResultUnspecified RunMobileFriendlyTestResponseMobileFriendlinessEnum = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
	RunMobileFriendlyTestResponseMobileFriendlinessEnumMobileFriendly                      RunMobileFriendlyTestResponseMobileFriendlinessEnum = "MOBILE_FRIENDLY"
	RunMobileFriendlyTestResponseMobileFriendlinessEnumNotMobileFriendly                   RunMobileFriendlyTestResponseMobileFriendlinessEnum = "NOT_MOBILE_FRIENDLY"
)

type RunMobileFriendlyTestResponse struct {
	MobileFriendliness   *RunMobileFriendlyTestResponseMobileFriendlinessEnum `json:"mobileFriendliness"`
	MobileFriendlyIssues []MobileFriendlyIssue                                `json:"mobileFriendlyIssues"`
	ResourceIssues       []ResourceIssue                                      `json:"resourceIssues"`
	Screenshot           *Image                                               `json:"screenshot"`
	TestStatus           *TestStatus                                          `json:"testStatus"`
}
