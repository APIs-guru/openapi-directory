package shared

// ErrorContext
// A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
type ErrorContext struct {
	HTTPRequest      *HTTPRequestContext `json:"httpRequest,omitempty"`
	ReportLocation   *SourceLocation     `json:"reportLocation,omitempty"`
	SourceReferences []SourceReference   `json:"sourceReferences,omitempty"`
	User             *string             `json:"user,omitempty"`
}
