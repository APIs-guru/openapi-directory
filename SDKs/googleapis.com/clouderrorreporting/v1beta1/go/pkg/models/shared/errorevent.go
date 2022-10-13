package shared

type ErrorEvent struct {
	Context        *ErrorContext   `json:"context"`
	EventTime      *string         `json:"eventTime"`
	Message        *string         `json:"message"`
	ServiceContext *ServiceContext `json:"serviceContext"`
}
