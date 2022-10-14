package shared

type RunMobileFriendlyTestResponseMobileFriendlinessEnum string

const (
	RunMobileFriendlyTestResponseMobileFriendlinessEnumMobileFriendlyTestResultUnspecified RunMobileFriendlyTestResponseMobileFriendlinessEnum = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
	RunMobileFriendlyTestResponseMobileFriendlinessEnumMobileFriendly                      RunMobileFriendlyTestResponseMobileFriendlinessEnum = "MOBILE_FRIENDLY"
	RunMobileFriendlyTestResponseMobileFriendlinessEnumNotMobileFriendly                   RunMobileFriendlyTestResponseMobileFriendlinessEnum = "NOT_MOBILE_FRIENDLY"
)

type RunMobileFriendlyTestResponse struct {
	MobileFriendliness   *RunMobileFriendlyTestResponseMobileFriendlinessEnum `json:"mobileFriendliness,omitempty"`
	MobileFriendlyIssues []MobileFriendlyIssue                                `json:"mobileFriendlyIssues,omitempty"`
	ResourceIssues       []ResourceIssue                                      `json:"resourceIssues,omitempty"`
	Screenshot           *Image                                               `json:"screenshot,omitempty"`
	TestStatus           *TestStatus                                          `json:"testStatus,omitempty"`
}
