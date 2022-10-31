package shared




type DiagnosticKindEnum string

const (
    DiagnosticKindEnumWarning DiagnosticKindEnum = "WARNING"
DiagnosticKindEnumError DiagnosticKindEnum = "ERROR"
)


type Diagnostic struct {
    Kind *DiagnosticKindEnum `json:"kind,omitempty"`
    Location *string `json:"location,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

