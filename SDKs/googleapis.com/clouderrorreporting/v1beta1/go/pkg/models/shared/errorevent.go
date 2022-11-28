package shared

// ErrorEvent
// An error event which is returned by the Error Reporting system.
type ErrorEvent struct {
	Context        *ErrorContext   `json:"context,omitempty"`
	EventTime      *string         `json:"eventTime,omitempty"`
	Message        *string         `json:"message,omitempty"`
	ServiceContext *ServiceContext `json:"serviceContext,omitempty"`
}
