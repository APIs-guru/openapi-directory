package shared

type ContextValueSeverityEnum string

const (
	ContextValueSeverityEnumSeverityUnspecified ContextValueSeverityEnum = "SEVERITY_UNSPECIFIED"
	ContextValueSeverityEnumInfo                ContextValueSeverityEnum = "INFO"
	ContextValueSeverityEnumWarning             ContextValueSeverityEnum = "WARNING"
	ContextValueSeverityEnumError               ContextValueSeverityEnum = "ERROR"
	ContextValueSeverityEnumFatal               ContextValueSeverityEnum = "FATAL"
)

// ContextValue
// A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.
type ContextValue struct {
	Label    *LocalizedString          `json:"label,omitempty"`
	Severity *ContextValueSeverityEnum `json:"severity,omitempty"`
	Unit     *string                   `json:"unit,omitempty"`
	Value    *float32                  `json:"value,omitempty"`
}
