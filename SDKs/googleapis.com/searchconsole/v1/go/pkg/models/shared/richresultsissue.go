package shared

type RichResultsIssueSeverityEnum string

const (
	RichResultsIssueSeverityEnumSeverityUnspecified RichResultsIssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	RichResultsIssueSeverityEnumWarning             RichResultsIssueSeverityEnum = "WARNING"
	RichResultsIssueSeverityEnumError               RichResultsIssueSeverityEnum = "ERROR"
)

type RichResultsIssue struct {
	IssueMessage *string                       `json:"issueMessage"`
	Severity     *RichResultsIssueSeverityEnum `json:"severity"`
}
