package shared




type DiagnosticMessageSeverityEnum string

const (
    DiagnosticMessageSeverityEnumSeverityUnspecified DiagnosticMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
DiagnosticMessageSeverityEnumInfo DiagnosticMessageSeverityEnum = "INFO"
DiagnosticMessageSeverityEnumWarning DiagnosticMessageSeverityEnum = "WARNING"
DiagnosticMessageSeverityEnumError DiagnosticMessageSeverityEnum = "ERROR"
DiagnosticMessageSeverityEnumFatal DiagnosticMessageSeverityEnum = "FATAL"
)


type DiagnosticMessage struct {
    Info *LocalizedString `json:"info,omitempty"`
    Metric *LocalizedString `json:"metric,omitempty"`
    MetricSpecific *bool `json:"metricSpecific,omitempty"`
    Severity *DiagnosticMessageSeverityEnum `json:"severity,omitempty"`
    ShortMessage *LocalizedString `json:"shortMessage,omitempty"`
    
}

