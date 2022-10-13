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
	HTTPRequest      *HTTPRequest               `json:"httpRequest"`
	InsertID         *string                    `json:"insertId"`
	JSONPayload      map[string]interface{}     `json:"jsonPayload"`
	Labels           map[string]string          `json:"labels"`
	LogName          *string                    `json:"logName"`
	Metadata         *MonitoredResourceMetadata `json:"metadata"`
	Operation        *LogEntryOperation         `json:"operation"`
	ProtoPayload     map[string]interface{}     `json:"protoPayload"`
	ReceiveTimestamp *string                    `json:"receiveTimestamp"`
	Resource         *MonitoredResource         `json:"resource"`
	Severity         *LogEntrySeverityEnum      `json:"severity"`
	SourceLocation   *LogEntrySourceLocation    `json:"sourceLocation"`
	SpanID           *string                    `json:"spanId"`
	Split            *LogSplit                  `json:"split"`
	TextPayload      *string                    `json:"textPayload"`
	Timestamp        *string                    `json:"timestamp"`
	Trace            *string                    `json:"trace"`
	TraceSampled     *bool                      `json:"traceSampled"`
}
