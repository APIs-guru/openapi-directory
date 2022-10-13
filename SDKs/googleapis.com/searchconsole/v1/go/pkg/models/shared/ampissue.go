package shared

type AmpIssueSeverityEnum string

const (
	AmpIssueSeverityEnumSeverityUnspecified AmpIssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	AmpIssueSeverityEnumWarning             AmpIssueSeverityEnum = "WARNING"
	AmpIssueSeverityEnumError               AmpIssueSeverityEnum = "ERROR"
)

type AmpIssue struct {
	IssueMessage *string               `json:"issueMessage"`
	Severity     *AmpIssueSeverityEnum `json:"severity"`
}
