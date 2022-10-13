package shared

type LogEntrySeverityEnum string

const (
	LogEntrySeverityEnumDefault   LogEntrySeverityEnum = "DEFAULT"
	LogEntrySeverityEnumDebug     LogEntrySeverityEnum = "DEBUG"
	LogEntrySeverityEnumInfo      LogEntrySeverityEnum = "INFO"
	LogEntrySeverityEnumNotice    LogEntrySeverityEnum = "NOTICE"
	LogEntrySeverityEnumWarning   LogEntrySeverityEnum = "WARNING"
	LogEntrySeverityEnumError     LogEntrySeverityEnum = "ERROR"
	LogEntrySeverityEnumCritical  LogEntrySeverityEnum = "CRITICAL"
	LogEntrySeverityEnumAlert     LogEntrySeverityEnum = "ALERT"
	LogEntrySeverityEnumEmergency LogEntrySeverityEnum = "EMERGENCY"
)

type LogEntry struct {
	HTTPRequest    *HTTPRequest            `json:"httpRequest"`
	InsertID       *string                 `json:"insertId"`
	Labels         map[string]string       `json:"labels"`
	Name           *string                 `json:"name"`
	Operation      *LogEntryOperation      `json:"operation"`
	ProtoPayload   map[string]interface{}  `json:"protoPayload"`
	Severity       *LogEntrySeverityEnum   `json:"severity"`
	SourceLocation *LogEntrySourceLocation `json:"sourceLocation"`
	StructPayload  map[string]interface{}  `json:"structPayload"`
	TextPayload    *string                 `json:"textPayload"`
	Timestamp      *string                 `json:"timestamp"`
	Trace          *string                 `json:"trace"`
}
