package shared

type DiagnosticKindEnum string

const (
	DiagnosticKindEnumWarning DiagnosticKindEnum = "WARNING"
	DiagnosticKindEnumError   DiagnosticKindEnum = "ERROR"
)

type Diagnostic struct {
	Kind     *DiagnosticKindEnum `json:"kind"`
	Location *string             `json:"location"`
	Message  *string             `json:"message"`
}
