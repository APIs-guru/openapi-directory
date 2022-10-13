package shared

type IssueResolutionEnum string

const (
	IssueResolutionEnumResolutionUnspecified IssueResolutionEnum = "RESOLUTION_UNSPECIFIED"
	IssueResolutionEnumUserAction            IssueResolutionEnum = "USER_ACTION"
	IssueResolutionEnumPendingProcessing     IssueResolutionEnum = "PENDING_PROCESSING"
)

type IssueSeverityEnum string

const (
	IssueSeverityEnumSeverityUnspecified IssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	IssueSeverityEnumError               IssueSeverityEnum = "ERROR"
	IssueSeverityEnumWarning             IssueSeverityEnum = "WARNING"
	IssueSeverityEnumInfo                IssueSeverityEnum = "INFO"
)

type Issue struct {
	Attribute   *string              `json:"attribute"`
	Description *string              `json:"description"`
	Destination *string              `json:"destination"`
	Resolution  *IssueResolutionEnum `json:"resolution"`
	Severity    *IssueSeverityEnum   `json:"severity"`
	Timestamp   *string              `json:"timestamp"`
	Title       *string              `json:"title"`
	Type        *string              `json:"type"`
}
