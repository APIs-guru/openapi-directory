package shared

type DiagnosticMessageSeverityEnum string

const (
	DiagnosticMessageSeverityEnumSeverityUnspecified DiagnosticMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	DiagnosticMessageSeverityEnumInfo                DiagnosticMessageSeverityEnum = "INFO"
	DiagnosticMessageSeverityEnumWarning             DiagnosticMessageSeverityEnum = "WARNING"
	DiagnosticMessageSeverityEnumError               DiagnosticMessageSeverityEnum = "ERROR"
	DiagnosticMessageSeverityEnumFatal               DiagnosticMessageSeverityEnum = "FATAL"
)

type DiagnosticMessage struct {
	Info           *LocalizedString               `json:"info"`
	Metric         *LocalizedString               `json:"metric"`
	MetricSpecific *bool                          `json:"metricSpecific"`
	Severity       *DiagnosticMessageSeverityEnum `json:"severity"`
	ShortMessage   *LocalizedString               `json:"shortMessage"`
}
