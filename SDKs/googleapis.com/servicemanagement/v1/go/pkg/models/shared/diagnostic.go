package shared

type DiagnosticKindEnum string

const (
	DiagnosticKindEnumWarning DiagnosticKindEnum = "WARNING"
	DiagnosticKindEnumError   DiagnosticKindEnum = "ERROR"
)

// Diagnostic
// Represents a diagnostic message (error or warning)
type Diagnostic struct {
	Kind     *DiagnosticKindEnum `json:"kind,omitempty"`
	Location *string             `json:"location,omitempty"`
	Message  *string             `json:"message,omitempty"`
}
