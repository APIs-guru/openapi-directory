package shared

type RichResultsIssueSeverityEnum string

const (
	RichResultsIssueSeverityEnumSeverityUnspecified RichResultsIssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	RichResultsIssueSeverityEnumWarning             RichResultsIssueSeverityEnum = "WARNING"
	RichResultsIssueSeverityEnumError               RichResultsIssueSeverityEnum = "ERROR"
)

// RichResultsIssue
// Severity and status of a single issue affecting a single rich result instance on a page.
type RichResultsIssue struct {
	IssueMessage *string                       `json:"issueMessage,omitempty"`
	Severity     *RichResultsIssueSeverityEnum `json:"severity,omitempty"`
}
