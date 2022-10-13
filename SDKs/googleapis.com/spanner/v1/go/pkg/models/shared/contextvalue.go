package shared

type ContextValueSeverityEnum string

const (
	ContextValueSeverityEnumSeverityUnspecified ContextValueSeverityEnum = "SEVERITY_UNSPECIFIED"
	ContextValueSeverityEnumInfo                ContextValueSeverityEnum = "INFO"
	ContextValueSeverityEnumWarning             ContextValueSeverityEnum = "WARNING"
	ContextValueSeverityEnumError               ContextValueSeverityEnum = "ERROR"
	ContextValueSeverityEnumFatal               ContextValueSeverityEnum = "FATAL"
)

type ContextValue struct {
	Label    *LocalizedString          `json:"label"`
	Severity *ContextValueSeverityEnum `json:"severity"`
	Unit     *string                   `json:"unit"`
	Value    *float32                  `json:"value"`
}
