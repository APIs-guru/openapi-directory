package shared

type IssueSeverityEnum string

const (
	IssueSeverityEnumSeverityUnspecified IssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	IssueSeverityEnumDeprecation         IssueSeverityEnum = "DEPRECATION"
	IssueSeverityEnumWarning             IssueSeverityEnum = "WARNING"
	IssueSeverityEnumError               IssueSeverityEnum = "ERROR"
)

type Issue struct {
	Description    *string            `json:"description"`
	Severity       *IssueSeverityEnum `json:"severity"`
	SourcePosition *SourcePosition    `json:"sourcePosition"`
}
