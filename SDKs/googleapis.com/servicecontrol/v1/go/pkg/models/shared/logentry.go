package shared




type LogEntrySeverityEnum string

const (
    LogEntrySeverityEnumDefault LogEntrySeverityEnum = "DEFAULT"
LogEntrySeverityEnumDebug LogEntrySeverityEnum = "DEBUG"
LogEntrySeverityEnumInfo LogEntrySeverityEnum = "INFO"
LogEntrySeverityEnumNotice LogEntrySeverityEnum = "NOTICE"
LogEntrySeverityEnumWarning LogEntrySeverityEnum = "WARNING"
LogEntrySeverityEnumError LogEntrySeverityEnum = "ERROR"
LogEntrySeverityEnumCritical LogEntrySeverityEnum = "CRITICAL"
LogEntrySeverityEnumAlert LogEntrySeverityEnum = "ALERT"
LogEntrySeverityEnumEmergency LogEntrySeverityEnum = "EMERGENCY"
)


type LogEntry struct {
    HTTPRequest *HTTPRequest `json:"httpRequest,omitempty"`
    InsertID *string `json:"insertId,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Operation *LogEntryOperation `json:"operation,omitempty"`
    ProtoPayload map[string]interface{} `json:"protoPayload,omitempty"`
    Severity *LogEntrySeverityEnum `json:"severity,omitempty"`
    SourceLocation *LogEntrySourceLocation `json:"sourceLocation,omitempty"`
    StructPayload map[string]interface{} `json:"structPayload,omitempty"`
    TextPayload *string `json:"textPayload,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Trace *string `json:"trace,omitempty"`
    
}

