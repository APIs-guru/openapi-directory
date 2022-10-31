package shared

type DiagnosticLevelEnum string

const (
	DiagnosticLevelEnumUnknown     DiagnosticLevelEnum = "UNKNOWN"
	DiagnosticLevelEnumInformation DiagnosticLevelEnum = "INFORMATION"
	DiagnosticLevelEnumWarning     DiagnosticLevelEnum = "WARNING"
	DiagnosticLevelEnumError       DiagnosticLevelEnum = "ERROR"
)

type Diagnostic struct {
	Field *string              `json:"field,omitempty"`
	Level *DiagnosticLevelEnum `json:"level,omitempty"`
}
