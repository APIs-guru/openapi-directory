package shared

type ReportedErrorEvent struct {
	Context        *ErrorContext   `json:"context"`
	EventTime      *string         `json:"eventTime"`
	Message        *string         `json:"message"`
	ServiceContext *ServiceContext `json:"serviceContext"`
}
