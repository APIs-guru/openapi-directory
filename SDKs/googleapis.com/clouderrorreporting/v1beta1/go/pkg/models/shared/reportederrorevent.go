package shared

// ReportedErrorEvent
// An error event which is reported to the Error Reporting system.
type ReportedErrorEvent struct {
	Context        *ErrorContext   `json:"context,omitempty"`
	EventTime      *string         `json:"eventTime,omitempty"`
	Message        *string         `json:"message,omitempty"`
	ServiceContext *ServiceContext `json:"serviceContext,omitempty"`
}
