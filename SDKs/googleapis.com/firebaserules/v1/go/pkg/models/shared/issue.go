package shared

type IssueSeverityEnum string

const (
	IssueSeverityEnumSeverityUnspecified IssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	IssueSeverityEnumDeprecation         IssueSeverityEnum = "DEPRECATION"
	IssueSeverityEnumWarning             IssueSeverityEnum = "WARNING"
	IssueSeverityEnumError               IssueSeverityEnum = "ERROR"
)

type Issue struct {
	Description    *string            `json:"description,omitempty"`
	Severity       *IssueSeverityEnum `json:"severity,omitempty"`
	SourcePosition *SourcePosition    `json:"sourcePosition,omitempty"`
}
