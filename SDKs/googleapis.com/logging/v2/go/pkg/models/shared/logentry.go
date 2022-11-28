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

// LogEntry
// An individual entry in a log.
type LogEntry struct {
	HTTPRequest      *HTTPRequest               `json:"httpRequest,omitempty"`
	InsertID         *string                    `json:"insertId,omitempty"`
	JSONPayload      map[string]interface{}     `json:"jsonPayload,omitempty"`
	Labels           map[string]string          `json:"labels,omitempty"`
	LogName          *string                    `json:"logName,omitempty"`
	Metadata         *MonitoredResourceMetadata `json:"metadata,omitempty"`
	Operation        *LogEntryOperation         `json:"operation,omitempty"`
	ProtoPayload     map[string]interface{}     `json:"protoPayload,omitempty"`
	ReceiveTimestamp *string                    `json:"receiveTimestamp,omitempty"`
	Resource         *MonitoredResource         `json:"resource,omitempty"`
	Severity         *LogEntrySeverityEnum      `json:"severity,omitempty"`
	SourceLocation   *LogEntrySourceLocation    `json:"sourceLocation,omitempty"`
	SpanID           *string                    `json:"spanId,omitempty"`
	Split            *LogSplit                  `json:"split,omitempty"`
	TextPayload      *string                    `json:"textPayload,omitempty"`
	Timestamp        *string                    `json:"timestamp,omitempty"`
	Trace            *string                    `json:"trace,omitempty"`
	TraceSampled     *bool                      `json:"traceSampled,omitempty"`
}

// LogEntryInput
// An individual entry in a log.
type LogEntryInput struct {
	HTTPRequest    *HTTPRequest               `json:"httpRequest,omitempty"`
	InsertID       *string                    `json:"insertId,omitempty"`
	JSONPayload    map[string]interface{}     `json:"jsonPayload,omitempty"`
	Labels         map[string]string          `json:"labels,omitempty"`
	LogName        *string                    `json:"logName,omitempty"`
	Metadata       *MonitoredResourceMetadata `json:"metadata,omitempty"`
	Operation      *LogEntryOperation         `json:"operation,omitempty"`
	ProtoPayload   map[string]interface{}     `json:"protoPayload,omitempty"`
	Resource       *MonitoredResource         `json:"resource,omitempty"`
	Severity       *LogEntrySeverityEnum      `json:"severity,omitempty"`
	SourceLocation *LogEntrySourceLocation    `json:"sourceLocation,omitempty"`
	SpanID         *string                    `json:"spanId,omitempty"`
	Split          *LogSplit                  `json:"split,omitempty"`
	TextPayload    *string                    `json:"textPayload,omitempty"`
	Timestamp      *string                    `json:"timestamp,omitempty"`
	Trace          *string                    `json:"trace,omitempty"`
	TraceSampled   *bool                      `json:"traceSampled,omitempty"`
}
