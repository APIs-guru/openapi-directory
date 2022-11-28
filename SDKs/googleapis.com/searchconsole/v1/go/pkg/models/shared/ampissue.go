package shared

type AmpIssueSeverityEnum string

const (
	AmpIssueSeverityEnumSeverityUnspecified AmpIssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	AmpIssueSeverityEnumWarning             AmpIssueSeverityEnum = "WARNING"
	AmpIssueSeverityEnumError               AmpIssueSeverityEnum = "ERROR"
)

// AmpIssue
// AMP issue.
type AmpIssue struct {
	IssueMessage *string               `json:"issueMessage,omitempty"`
	Severity     *AmpIssueSeverityEnum `json:"severity,omitempty"`
}
